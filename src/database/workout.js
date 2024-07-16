import db from '../database/db.json' with { type: 'json'};
import saveToDatabase from './utils.js';


class workOuts {

    static getAllWorkouts = () => {
        return db.workouts;
    }

    static createNewWorkout = (newWorkout) => {

        const isAlreadyAdded = db.workouts.findIndex( (workOut) => workOut.name === newWorkout.name) > -1;
        
        if (isAlreadyAdded) {
            return;
        }

        db.workouts.push(newWorkout);
        saveToDatabase(db);

        return newWorkout;
    }

    static getOneWorkout = (id) => {

        const oneWorkout = db.workouts.find((workout) => workout.id == id);

        if (!oneWorkout) {
            return -1;
        }

        return oneWorkout;

    }

    static updateOneWorkout = (workoutId, body) => {
        const workoutIndex = db.workouts.findIndex((workout) => workout.id === workoutId);
        const updateWorkout = {
            ...body
        }
        updateWorkout.updatedAt = new Date().toLocaleString("pt-br");


        db.workouts[workoutIndex] = updateWorkout;
        saveToDatabase(db);

        return updateWorkout;
    }
    
    static deleteOneWorkout = (params) => {

        const workoutIndex = db.workouts.findIndex((workout) => workout.id === params.id);

        if (workoutIndex === -1) {
            return -1;
        }

        // const deleteWorkout = db.workouts.splice(workoutIndex, 1);
        saveToDatabase(db)

        return deleteWorkout;
    }
};

export default workOuts;
