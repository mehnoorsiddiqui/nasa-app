const Router = require("express");
const {getAvailableDates,getCombinedImages }= require("./getCombinedImages");
const mailSend = require("./mailSend");
const api = Router();

api.get("/emailImage", async (req, res) => {
    const date = await getAvailableDates();
    const base64Img = await getCombinedImages(date);
    const emailImage = await mailSend(base64Img,req.query.userEmail);
    res.send({ emailMeg: emailImage })
});

module.exports = api;