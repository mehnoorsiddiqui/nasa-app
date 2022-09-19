//STEP 1: Copy the entire code sample from the Portal here

import { ApiError, Client, NaturalColorController } from 'nasa-epic-apilib';

const client = new Client({
  timeout: 0,
})
const naturalColorController = new NaturalColorController(client);
const gridColumns = 2;
const imageQuality = 'jpg';


const getCombinedImages = async (date) => {
  //STEP 2: Move the try-catch statement from the code sample copied in STEP 1 here
  try {
    const { result, ...httpResponse } = await naturalColorController.combinedImagesOnADate(date, gridColumns, imageQuality);
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    const base64Img = await streamToString(result);
    return base64Img;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}


// STEP 3: copy the following lines to convert the stream into a base64 encoded string



function streamToString(stream) {
  const chunks = [];
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    stream.on('error', (err) => reject(err));
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
  })
}

export default getCombinedImages;