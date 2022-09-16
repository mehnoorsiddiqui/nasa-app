const { ApiError, Client, NaturalColorController } = require('nasa-epic-apilib');

const client = new Client({
  timeout: 0,
})
const naturalColorController = new NaturalColorController(client);


// get the latest image date
const getAvailableDates = async () => {
  try {
    const { result, ...httpResponse } = await naturalColorController.getAllAvailableDates();
    return result[0].date;
  } catch(error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}


const gridColumns = 2;
const imageQuality = 'thumbs';

const getCombinedImages = async (date) => {
  try {
    const { result, ...httpResponse } = await naturalColorController.getCombinedImagesOnADate(date, gridColumns, imageQuality);

    function streamToString(stream) {
      const chunks = [];
      return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
      })
    }

    const base64Img = await streamToString(result);
    return base64Img;
  } catch (error) {
    console.log(error)
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}
module.exports = {getAvailableDates, getCombinedImages};