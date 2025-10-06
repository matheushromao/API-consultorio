import express from "express";
import { setupSwagger } from "./swagger";
import routes from "./routes";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use("", routes);
setupSwagger(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
