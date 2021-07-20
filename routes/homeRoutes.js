const router = require("express").Router();
const path = require("path");

// index.html is at /
router.get("/", async, (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "/index.html"));

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// stats.html is at /stats

router.get("/stats", async, (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "/stats.html"));

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//exercise.html is at /exercise or exercise/?
router.get("/exercise", async, (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "/exercise.html"));

    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;