import "dotenv/config";
import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = 5000;

async function startServer() {
  try {
    await prisma.$connect();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();
