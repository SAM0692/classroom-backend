import express from 'express';

const PORT = 8000;

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send("Welcome to the Homepage!!");
});

app.listen(PORT, () => console.log(`Server running at  http://localhost:${PORT}`))