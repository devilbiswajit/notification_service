import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import notificationRoutes from './routes/notificationRoutes.js';

dotenv.config({
    path: './env'
})

const app = express();
app.use(express.json({limit:"16kb"}))

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))

connectDB();

app.use('/api/v1', notificationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
