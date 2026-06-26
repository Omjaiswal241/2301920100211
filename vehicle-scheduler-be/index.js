const express=require("express");
const { randomFill } = require("node:crypto");
const app=express()
app.post("/schedules", async (req, res) => {
    const {
        vehicleId,
        driverId,
        startTime,
        endTime,
        source,
        destination
    } = req.body;

    const conflict = await Schedule.findOne({
        vehicleId,
        status: "scheduled",
        startTime: { $lt: endTime },
        endTime: { $gt: startTime }
    });

    if (conflict) {
        return res.status(400).json({
            message: "Vehicle already booked"
        });
    }

    const schedule = await Schedule.create({
        vehicleId,
        driverId,
        startTime,
        endTime,
        source,
        destination,
        status: "scheduled"
    });

    res.status(201).json(schedule);
});

app.listen(3000);