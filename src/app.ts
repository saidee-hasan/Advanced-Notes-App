import express, { Application, Request, Response } from 'express';

const app: Application = express();

// Middleware to parse JSON
app.use(express.json());



// Root test route
app.get('/', (_req: Request, res: Response) => {
  res.send('Hello from app!');
});

export default app;
