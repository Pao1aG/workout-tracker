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

        console.log(workoutData);

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
        //sort results with total duration of workouts
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
router.put("/:id", async ({body}, res) => {
    console.log(body);

    try{
        //first object is to filter, DELETED FIRST OBJECT AND IT WORKED
        //second object is the document being updated
        const workoutData = await Workout.updateOne({$set: {body:body}});

        res.status(200).json(workoutData); 

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


module.exports = router;