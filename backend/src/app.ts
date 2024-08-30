import express from 'express';
import cookie from 'cookie-parser';
import v1Router from './router/index'

const app = express();

app.use(express.json());
app.use(cookie());

app.use("/api/v1", v1Router)

export default app;