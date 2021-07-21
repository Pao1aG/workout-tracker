const Workout = require("../../models/workout");

const router = require("express").Router();
// /api/workouts/ GET
router.get("/", async (req, res) => {
    try{
        //send back total duration -> otherwwise Total Workout Duration: undefined
        //mongoose.aggregate method!
        // The aggregate method finds all the data but also adds
        // a field and uses other methods like the $sum to fill in this field
        const workoutData = await Workout.aggregate([{
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }]);

        // console.log(workoutData);

        res.status(200).json(workoutData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// /api/workouts/range GET
router.get("/range", async (req, res) => {
    try{
        //this is where you will sum all the durations of exercises
        //combined weight is calculated by stats.js
        const workoutData = await Workout.aggregate([{
            $addFields: {
                totalDuration: {$sum: "$exercises.duration"}
            }
        }]);
        
        console.log(workoutData);

        res.status(200).json(workoutData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// /api/workouts POST
router.post("/", async ({body}, res) => {
    console.log(body);

    try{
        //a new instance of Workout is created as soon as
        //the New Workout button is clicked.
        //this includes an id, day, and empty exercises array
        const workoutData = await Workout.create({
            body
        });

        console.log(workoutData);

        res.status(200).json(workoutData);
        
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// /api/workouts/:id PUT
router.put("/:id", async (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    try{
        /*pushing req.body to exercises array
        this will update the current Workout based on the id that is assigned
        to instance of Workout upon creation (post request) */
        const findWorkout = await Workout.findOne({_id: req.params.id});
        const workoutData = await findWorkout.updateOne({$push: {"exercises":req.body}});

        res.status(200).json(workoutData); 

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;