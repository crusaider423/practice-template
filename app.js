import express from "express";
import productsRouter from "./routes/products.js";
import mongoose from "mongoose";
import { envConfige } from "./envConfige.js";
import authRouter from "./routes/auth.js";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(morgan('tiny'))
// app.use((req, res, next) => {
//     // console.log(req.body);
//     // console.log(typeof req.body);
//     next();
// });

app.use("/products", productsRouter);
app.use("/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use((error, req, res, next) => {
  const { status = 500, message } = error;
  res.status(status).json({ message });
});

mongoose
  .connect(envConfige.DB_HOST)
  .then(() =>
    app.listen(envConfige.PORT, () => {
      console.log(`=== Server start port ${envConfige.PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
