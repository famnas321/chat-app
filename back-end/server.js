import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import cookieParser from "cookie-parser";
import authRoters from "./routes/auth.rout.js";
import messageRoutes from "./routes/message.rout.js";
import userRoutess from "./routes/userRoutes.js";
import conectMongo from "./db/conectMongo.js";

dotenv.config();

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',  // Adjust for production
  credentials: true,               // Allow cookies to be sent
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" }, // Ensure cookies are secure in production
  })
);

app.use("/api/auth", authRoters);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutess);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  conectMongo();
  console.log(`Server is running on ${PORT}`);
});
