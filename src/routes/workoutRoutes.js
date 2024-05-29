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
    .get('/:workingId', workoutController.getOneWorkout)

    //UPDATE
    .patch('/:workoutId', workoutController.updateOneWorkout)

    //DELETE
    .delete('/:workingId', workoutController.deleteOneWorkout);

export default router;