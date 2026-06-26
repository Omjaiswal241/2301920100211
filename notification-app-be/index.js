const express=require("express")
const app=express()

app.post("/notifications", async (req, res) => {
    const notification = await Notification.create(req.body);
    res.json(notification);
});

app.get("/notifications/:userId", async (req, res) => {
    const notifications = await Notification.find({
        userId: req.params.userId
    });

    res.json(notifications);
});

app.patch("/notifications/:id/read", async (req, res) => {
    await Notification.findByIdAndUpdate(
        req.params.id,
        { isRead: true }
    );

    res.sendStatus(200);
});
app.listen(3001)