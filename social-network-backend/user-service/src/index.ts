import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import userRoutes from "./routes/userRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;

if (process.env.NODE_ENV !== "test") {
  const PORT = process.env.PORT || 3003;
  app.listen(PORT, () => {
    console.log(`User service running on port ${PORT}`);
  });
}
