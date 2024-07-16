import express, { json } from "express";
import workoutController from "../controllers/workoutController.js";
import workouts from "../database/workout.js";

const router = express.Router();

// CRUD
router

    //CREATE
    .post('/', workoutController.createNewWorkout)

    //READ
    .get('/', workoutController.getAllWorkouts)

    //READ
    .get('/:id', workoutController.getOneWorkout)

    //UPDATE
    .patch('/:id', workoutController.updateOneWorkout)

    //DELETE
    .delete('/:id', workoutController.deleteOneWorkout);

export default router;