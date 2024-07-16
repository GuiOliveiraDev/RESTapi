import workoutServices from "../services/workoutService.js";


class workoutController {
    
    static createNewWorkout = (req, res) => {

        const createdWorkout = workoutServices.createNewWorkout(req);

        return res.status(200).send({message: "status: ok", data: createdWorkout});
    };

    static getAllWorkouts = (req, res) => {

        const allWorkouts = workoutServices.getAllWorkouts();

        return res.status(200).send(allWorkouts());
    };
    
    static getOneWorkout = (req, res) => {
        const workoutId = req.params.id;

          const workout = workoutServices.getOneWorkout(workoutId);

          if (workout === -1) {
            return res.status(404).send({message: "Workout not found"})
          }
          return res.send({ message: "ok", data: workout});
    };
    
    static updateOneWorkout = (req, res) => {

        const workoutId = req.params.id;
        const body = req.body;

        const updatedWorkout = workoutServices.updateOneWorkout(workoutId, body);

        return res.send({data: updatedWorkout});
    };
    
    static deleteOneWorkout = (req, res) => {

        const deletedWorkout = workoutServices.deleteOneWorkout(req);

        if (deletedWorkout === -1) {
            return res.status(404).send({message: "Workout not found"});
        }

        return res.send({ deletedData: deletedWorkout});
    };
}

export default workoutController;