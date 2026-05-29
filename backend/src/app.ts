import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import authRoutes from "./routes/authroutes";
import testRoutes from "./routes/testroutes";
import productRoutes from "./routes/productroute";
import orderRoutes from "./routes/orderroutes";


dotenv.config();

const app = express();
app.use(cors());


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);

app.use("/api/test", testRoutes);

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.get("/", (_req, res) => {
  res.send("Retail POS API Running");
});

export default app;