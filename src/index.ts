import express from "express";
import { setupSwagger } from "./swagger";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.use(express.json());
setupSwagger(app);
app.use("", routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
