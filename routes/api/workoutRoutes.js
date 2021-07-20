const Workout = require("../../models/workout");

const router = require("express").Router();
// /api/workouts/ GET
router.get("/", async (req, res) => {
    try{
        //find all documents
        const workoutData = await Workout.find({});

        res.status(200).json(workoutData);

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// /api/workouts/range

router.get("/range", async (req, res) => {
    try{

        //this is where you will sum all the durations of exercises

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// /api/workouts/:id PUT
router.put("/:id", async ({body}, res) => {
    try{

        //first object is to filter, 
        //second object is the document being updated
        const workoutData = await Workout.updateOne({name: body.params.id}, {$set: {body:body}});

        res.status(200).json(workoutData); 

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// /api/workouts POST
router.post("/", async ({body}, res) => {
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

module.exports = router;