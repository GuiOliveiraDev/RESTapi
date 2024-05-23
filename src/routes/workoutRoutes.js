import express from "express";

const router = express.Router();

// CRUD
router

    //CREATE
    .post('/', (req, res) => {
        res.send('Create a new workout');
    })

    //READ
    .get('/', (req, res) => {
        res.send('Get all workouts');
    })

    //READ
    .get('/:workingId', (req, res) => {
        res.send('Get an existing workout');
    })

    //UPDATE
    .patch('/:workoutId', (req, res) => {
        res.send('Update an existing workout');
    })

    //DELETE
    .delete('/:workingId', (req, res) => {
        res.send('Delete an existing workout');
    });

export default router;