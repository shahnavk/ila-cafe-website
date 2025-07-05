require("dotenv").config();
console.log("Stripe key:", process.env.STRIPE_SECRET_KEY); // <--- Add this line
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();

app.use(cors());

// Use conditional body parsing: raw for webhook, json otherwise
app.use("/webhook", bodyParser.raw({ type: "application/json" }));
app.use(bodyParser.json());

// Your /webhook route with raw body parsing:
app.post(
  "/webhook",
  bodyParser.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log("Webhook error:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const metadata = session.metadata || {};
      const customerDetails = session.customer_details || {};

      const name = metadata.name || customerDetails.name || "Customer";
      const email = metadata.email || customerDetails.email;

      const lotNumber = `LOT${Date.now().toString().slice(-5)}`;
      console.log("✅ Payment complete for:", email);
      console.log("🎟️ Assigned lot number:", lotNumber);

      if (!email) {
        console.log("❌ No email found. Skipping email send.");
        return res.sendStatus(200);
      }

      // try {
      //   const { Resend } = require('resend');
      //   const resend = new Resend(process.env.RESEND_API_KEY);

      //   await resend.emails.send({
      //     from: 'onboarding@resend.dev',
      //     to: email,
      //     subject: '🎉 Your Ila Cafe Anniversary Lot Entry is Confirmed!',
      //     html: `
      //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px;">
      //         <img src="https://yourdomain.com/logo.png" alt="Ila Cafe Logo" style="max-width: 150px; display: block; margin-bottom: 20px;" />
      //         <h2 style="color: #382218;">Hi ${name},</h2>
      //         <p style="font-size: 16px; color: #444;">
      //           Thank you for entering the <strong>Ila Cafe Anniversary Lot</strong>! 🎉
      //         </p>
      //         <div style="margin: 30px 0; padding: 20px; background: #fde7cc; text-align: center; border-radius: 12px;">
      //           <p style="margin: 0; font-size: 18px; color: #382218;">Your Lot Number</p>
      //           <h1 style="margin: 0; font-size: 36px; color: #b38e67;">${lotNumber}</h1>
      //         </div>
      //         <p style="font-size: 15px; color: #444;">
      //           We’ll announce the winner on our Instagram soon. Be sure to follow us at
      //           <a href="https://instagram.com/ila.cafe" style="color: #7aa562;">@ila.cafe</a> 🍀
      //         </p>
      //         <p style="font-size: 13px; color: #aaa;">— The Ila Cafe Team</p>
      //       </div>
      //     `
      //   });

      //   console.log("✅ Email sent to", email);
      // } catch (error) {
      //   console.error("❌ Failed to send email:", error);
      // }
      console.log("📧 Attempting to send email to:", email);

      try {
        const { Resend } = require("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        const now = new Date();
        const purchaseDate = now.toLocaleString("en-GB", { timeZone: "Europe/London" });
        // const validUntil = new Date(now.getTime() + 6 * 30 * 24 * 60 * 60 * 1000).toLocaleDateString("en-GB");
        
        const date = now.toISOString().split("T")[0]; // YYYY-MM-DD
        const time = now.toTimeString().split(" ")[0]; // HH:MM:

        const expiresAt = new Date();
        expiresAt.setMonth(expiresAt.getMonth() + 6);
        const expiryDate = expiresAt.toISOString().split("T")[0]; // 6 months later
        const validUntil = expiresAt.toLocaleString("en-GB", { timeZone: "Europe/London" }); // for email display


        const result = await resend.emails.send({
          from: "Ila Cafe & Desserts <hello@ilacafedesserts.com>",
          to: email,
          subject: "🎉 Your Ila Cafe Anniversary Lot Entry is Confirmed!",
          html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #fff; border-radius: 12px; border: 1px solid #eee; overflow: hidden;">
            
            <div style="background-color: #fde7cc; padding: 20px; text-align: center;">
              <a href="https://ilacafedesserts.com/">
                <img src="https://ilacafedesserts.com/ila-logo.png" alt="Ila Cafe Logo" style="max-width: 70px;" />
              </a>
              <h2 style="margin: 15px 0 5px; color: #382218;">Thank You for Joining the Celebration!</h2>
              <p style="color: #382218; font-size: 15px;">Your Ila Cafe Anniversary Lot entry is confirmed.</p>
            </div>
        
            <div style="padding: 30px 20px; text-align: center;">
              <p style="font-size: 16px; color: #444; margin-bottom: 10px;">Hi <strong>${name}</strong>,</p>
        
              <p style="font-size: 15px; color: #444; line-height: 1.6;">
                We're thrilled to have you in our <strong>Anniversary Lucky Draw</strong> 🎉 <br/>
                Only <strong>799 spots</strong> are available, and you're officially in!
              </p>
        
              <div style="margin: 30px auto; padding: 20px; background: #fff5e8; border: 2px dashed #b38e67; border-radius: 12px; width: fit-content;">
                <p style="margin: 0; font-size: 18px; color: #382218;">🎟️ Your Lot Number</p>
                <h1 style="margin: 0; font-size: 42px; color: #b38e67;">${lotNumber}</h1>
              </div>
        
              <table style="margin: 20px auto; font-size: 15px; color: #444;">
                <tr><td style="padding: 4px 8px;">🗓️ <strong>Purchase Date:</strong></td><td>${purchaseDate}</td></tr>
                <tr><td style="padding: 4px 8px;">📅 <strong>Valid Until:</strong></td><td>${validUntil}</td></tr>
                <tr><td style="padding: 4px 8px;">💳 <strong>Amount Paid:</strong></td><td>£19.99 via Stripe</td></tr>
              </table>
        
              <p style="font-size: 14px; color: #555; line-height: 1.6; margin-top: 30px;">
                📍 Please show this lot number at the counter to redeem your food coupon.<br />
                🕒 Redeem it before the expiry date.<br /><br/>
                👉 Follow us on Instagram: 
                <a href="https://instagram.com/ilacafedesserts" style="color: #7aa562; text-decoration: none;">
                  @ila.cafe
                </a> <br />
                🎉 The lucky draw winner will be announced once all 799 lots are sold.
              </p>
            </div>
        
            <div style="background-color: #f4f4f4; text-align: center; padding: 20px; font-size: 13px; color: #999;">
              — The Ila Cafe Team
            </div>
          </div>
          `,
        
        });

        console.log("✅ Email sent to", email);
        console.log("📨 Resend response:", result);

        // ✅ Save to Google Sheet

        const axios = require("axios");

        
        

        await axios.post("https://sheetdb.io/api/v1/dqvyfvsq0iezw", {
          data: {
            name,
            email,
            instagram: metadata.instagram || "",
            phone: metadata.phone || "",
            lotnumber: lotNumber,
            used: "no",
            date,
            time,
            expires_at: expiryDate
          },
        });
        console.log("📝 Saved to Google Sheet");
      } catch (error) {
        console.error("❌ Failed to send email:", error);
      }
    }

    res.sendStatus(200);
  }
);

app.post("/create-checkout-session", async (req, res) => {
  const { name, email, phone, instagram } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: "price_1Rh9QIQSzfy0iZx9qeZSF0oG", // ✅ Use your actual price ID
          quantity: 1,
        },
      ],
      metadata: {
        name,
        email,
        phone,
        instagram,
      },
      success_url: `${process.env.CLIENT_URL}/anniversary-lot-success`,
      cancel_url: `${process.env.CLIENT_URL}/anniversary-lot-cancelled`,
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error("❌ Stripe session creation error:", err);
    res.status(500).json({ error: "Failed to create session" });
  }
});

const PORT = process.env.PORT || 4000;
app.get("/", (req, res) => {
  res.send("🎉 Ila Cafe backend is running!");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
