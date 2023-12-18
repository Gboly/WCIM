import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const params = JSON.stringify({
  email: "customer@email.com",
  amount: "20000",
  currency: "NGN",
  //   callback: () => ,
});

const initOptions = {
  method: "POST",
  url: "https://api.paystack.co/transaction/initialize",
  port: 443,
  data: params,
  headers: {
    authorization: `Bearer ${process.env.SECRET_KEY}`,
    "Content-Type": "application/json",
  },
};

const verificationOptions = {
  method: "GET",
  url: "https://api.paystack.co/transaction/verify/6uyxyg6bws",
  port: 443,
  headers: {
    authorization: `Bearer ${process.env.SECRET_KEY}`,
  },
};

export const initializePayment = async (req, res) => {
  try {
    const initResponse = await axios(initOptions);
    res.status(200).json(initResponse.data);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const verificationResponse = await axios(verificationOptions);
    res.status(200).json(verificationResponse.data);
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json({ error: "An error was encountered. Try again" });
  }
};
