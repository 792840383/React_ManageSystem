import express from "express";
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/product.js"

const app = express();


app.use(express.json());


app.use("/api/auth", authRoutes);
app.use("/api/products",productRoutes);



app.listen(8800, () => {
  console.log("Connected!");
});
