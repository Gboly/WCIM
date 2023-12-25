import axios from "axios";
import dotenv from "dotenv";
import Donation from "../models/donation.js";
dotenv.config();
const authorization = `Bearer ${process.env.SECRET_KEY}`;

const initOptions = {
  method: "POST",
  url: "https://api.paystack.co/transaction/initialize",
  port: 443,
  headers: {
    authorization: authorization,
    "Content-Type": "application/json",
  },
};

const verificationOptions = {
  method: "GET",
  url: "https://api.paystack.co/transaction/verify/",
  port: 443,
  headers: {
    authorization: authorization,
  },
};

const listPlansOptions = {
  url: "https://api.paystack.co/plan",
  port: 443,
  method: "GET",
  headers: {
    Authorization: authorization,
  },
};

const createPlanOptions = {
  url: "https://api.paystack.co/plan",
  port: 443,
  method: "POST",
  headers: {
    Authorization: authorization,
    "Content-Type": "application/json",
  },
};

export const initializePayment = async (req, res) => {
  const { email, amount, currency, subscription } = req.body;
  try {
    const donation = new Donation(req.body);
    await donation.save();

    let planCode;
    if (subscription) {
      const plans = await axios(listPlansOptions);
      const desiredPlan = plans.data.data.find(
        ({ amount: price }) => String(price) === amount
      );
      if (!desiredPlan) {
        const plan = await axios({
          ...createPlanOptions,
          data: JSON.stringify({
            name: `${Number(amount) / 100} donations`,
            interval: "monthly",
            amount,
          }),
        });
        plan && (planCode = plan.data.data.plan_code);
      } else {
        planCode = desiredPlan.plan_code;
      }
    }

    const initResponse = await axios({
      ...initOptions,
      data: JSON.stringify({
        email,
        amount,
        currency,
        ...(planCode ? { plan: planCode } : {}),
      }),
    });
    res.status(200).json(initResponse.data);
  } catch (error) {
    console.log(error?.response?.data || error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

export const verifyPayment = async (req, res) => {
  const { reference } = req.body;

  try {
    const verificationResponse = await axios({
      ...verificationOptions,
      url: `${verificationOptions.url}${reference}`,
    });
    res.status(200).json(verificationResponse.data);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
