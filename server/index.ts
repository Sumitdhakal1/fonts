import express from "express";
import cors from "cors";
import cwvRoute from "./routes/cwvRoute";
import AppError from "./utils/error/AppError";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors({
//     origin:' http://localhost:5173',
//     methods:["GET","POST","PUT","DELETE"],
//  allowedHeaders:["Content-type", "Authorization"],

// }))

app.use("/api", cwvRoute);
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

export default app;
