// import axios from "axios";
import dotenv from "dotenv";
import Donation from "../models/donation.js";
import stripe from "stripe";
import { clientBaseUrl } from "../index.js";

dotenv.config();
const Stripe = stripe(process.env.STRIPE_SECRET_KEY);

export const initializePayment = async (req, res) => {
  const { email, amount, subscription } = req.body;
  try {
    const donation = new Donation(req.body);
    await donation.save();

    const session = await Stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: email,
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: "Donation",
              description: "In a bid to make the world a better place",
              images: [
                "https://res.cloudinary.com/dirwr8cde/image/upload/v1703697304/wcim/wcim-main-pic_helybz.jpg",
              ],
            },
          },
        },
      ],
      success_url: clientBaseUrl + "stripe/redirect/success",
      cancel_url: clientBaseUrl + "stripe/redirect/cancel",
    });

    // Attaching the session object to a data key just to match with paystack.
    res.status(200).json({ data: session });
  } catch (error) {
    console.log(error?.response?.data || error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
