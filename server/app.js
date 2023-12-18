import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import paystackRoute from "./routes/paystackPayment.js";

dotenv.config();
const app = express();
const PORT = "5000";

//Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
    credentials: true,
  })
);
app.use(helmet());
app.use(morgan("combined"));

//routing
app.use("/payment/paystack", paystackRoute);

app.listen(PORT, (e) =>
  console.log(e || `Successfully connected to server ${PORT}`)
);