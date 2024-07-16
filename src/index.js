import express from "express";
import workoutRouter from "./routes/workoutRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
})

app.get('/', (req, res) => res.send('hello world'));
app.use('/workouts', workoutRouter);