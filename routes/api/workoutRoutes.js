const Workout = require("../../models/workout");

const router = require("express").Router();
// /api/workouts/ GET
router.get("/", async (req, res) => {
    try{
        //send back total duration ->Total Workout Duration: undefined
        //mongoose.aggregate method
        //find all documents is what we have so far in this Workout.find({})
        const workoutData = await Workout.find({});
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