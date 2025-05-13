import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './db/index.js';
import schoolRoutes from './routes/schoolRoutes.js';

dotenv.config();

const app = express();
console.log("✅ index working");

app.use(cors());
app.use(express.json());

app.use('/api', schoolRoutes); // ✅ this is important

const PORT = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Server failed to start due to DB error.');
    process.exit(1);
  });
