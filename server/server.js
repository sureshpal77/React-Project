import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import pg from 'pg';

import authRoutes from './routes/authRoutes.js'



const app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:5000'
  ],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // needed for Neon
});


app.use("/api/status/", (req, res) => {
  res.send("server is running.......");
});

app.use("/api/auth/", authRoutes);



if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
}

export default app;