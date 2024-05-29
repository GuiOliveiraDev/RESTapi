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
};

export default workOuts;
