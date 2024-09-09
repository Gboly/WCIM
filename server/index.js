import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import paystackRoute from "./routes/paystackPayment.js";
import stripeRoute from "./routes/stripePayment.js";
import storyRoute from "./routes/story.js";
import scholarshipRoute from "./routes/scholarship.js";
import runDb from "./config/db.config.js";

dotenv.config();
const app = express();

//cors
const allowedOrigins = ["https://wcim.vercel.app", "http://localhost:5173"];
const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) >= 0) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET,POST,PUT,PATCH,DELETE,HEAD",
  credentials: true,
};

//Middlewares
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));
app.use(helmet());
app.use(morgan("combined"));

//Database connection
runDb();

//routing
app.get("/", (req, res) => {
  res.json("Hello");
});
app.use("/payment/paystack", paystackRoute);
app.use("/payment/stripe", stripeRoute);
app.use("/story", storyRoute);
app.use("/scholarship/apply", scholarshipRoute);

app.listen(process.env.PORT, (e) =>
  console.log(e || `Successfully connected to server ${process.env.PORT}`)
);
