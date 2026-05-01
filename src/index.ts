import express from 'express';
import subjectsRouter from './routes/subjects';
import cors from 'cors';

const PORT = 8000;

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

app.use('/api/subjects', subjectsRouter);

app.get('/', (req, res) => {
    res.send("Welcome to the Homepage!!");
});

app.listen(PORT, () => console.log(`Server running at  http://localhost:${PORT}`))