import Router  from "express"
import getCombinedImages  from "./getCombinedImages"
import mailSend from "./mailSend";
import getAvailableDates from "./getAvailableDates";

const api = Router();

api.get("/emailImage", async (req, res) => {
    const date = await getAvailableDates();
    const base64Img = await getCombinedImages(date);
    const emailImage = await mailSend(base64Img,req.query.userEmail);
    res.send({ emailMeg: emailImage })
});

// module.exports = api;
export default api;