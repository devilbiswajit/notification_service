import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './db/db.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use('/api', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
