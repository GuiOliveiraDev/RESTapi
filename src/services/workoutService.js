import workOuts from "../database/workout.js";
import {v4} from "uuid";
class workoutServices {

    static createNewWorkout = (req, res) => {
        
        const {body} = req;

        if (
            !body.name ||
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
        ) {
            return "ok";
        }

        const newWorkout = {
            name: body.name,
            mode: body.mode,
            equipment: body.equipment,
            exercises: body.exercises,
            trainerTips: body.trainerTips
        };

        const workOutToInsert = {
            ...newWorkout,
            id: v4(),
            createdAt: new Date().toLocaleString("pt-br"),
            updatedAt: new Date().toLocaleString("pt-br")
        }

        const createdWorkout = workOuts.createNewWorkout(workOutToInsert);
        
        return createdWorkout;
    };

    static getAllWorkouts = () => {
        const allWorkouts = workOuts.getAllWorkouts;
        return allWorkouts;
    };

    static getOneWorkout = () => {
        return;
    };

    static updateOneWorkout = () => {
        return;
    };

    static deleteOneWorkout = () => {
        return;
    };
};

export default workoutServices;