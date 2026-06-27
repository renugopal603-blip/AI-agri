const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

router.get("/test-dataset", (req, res) => {
    const results = [];
    const filePath = path.join(__dirname, "../../dataset/crop_data.csv");

    fs.createReadStream(filePath)
        .pipe(csv())
        .on("data", (data) => results.push(data))
        .on("end", () => {
            res.json({
                message: "Dataset loaded successfully",
                totalRows: results.length,
                sample: results.slice(0, 3)
            });
        })
        .on("error", (error) => {
            console.error(error);
            res.status(500).json({
                error: "Dataset not loaded",
                details: error.message
            });
        });
});

module.exports = router;