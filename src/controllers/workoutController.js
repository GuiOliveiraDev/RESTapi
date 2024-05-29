import workoutServices from "../services/workoutService.js";


class workoutController {
    
    static createNewWorkout = (req, res) => {
        
        const {body} = req;

        if (
            !body. ||
            !body.mode ||
            !body.equipment ||
            !body.exercises ||
            !body.trainerTips
        ) {
            return "ok";
        }

        const createdWorkout = workoutServices.createNewWorkout;

        res.send({status: "ok", data: createdWorkout});
    };

    static getAllWorkouts = (req, res) => {

        const allWorkouts = workoutServices.getAllWorkouts();

        res.status(200).send(allWorkouts());
    };
    
    static getOneWorkout = (req, res) => {

        const workout = workoutServices.getOneWorkout;

        res.send('Get an existing workout');
    };
    
    static updateOneWorkout = (req, res) => {

        const updatedWorkout = workoutServices.updateOneWorkout;

        res.send('Update an existing workout');
    };
    
    static deleteOneWorkout = (req, res) => {

        const deletedWorkout = workoutServices.deleteOneWorkout;

        res.send('Delete an existing workout');
    };
}

export default workoutController;