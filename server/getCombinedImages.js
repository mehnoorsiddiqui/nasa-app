import { Client, NaturalColorController } from 'nasa-epic-apilib';

const client = new Client({
  timeout: 0,
})
const naturalColorController = new NaturalColorController(client);

const gridColumns = 2;
const imageQuality = 'thumbs';

const getCombinedImages = async (date) => {
  try {
    const { result } = await naturalColorController.getCombinedImagesOnADate(date, gridColumns, imageQuality);

    function streamToString(stream) {
      const chunks = [];
      return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('base64')));
      })
    }
   //convert the ReadableStream into a base64 string
    const base64Img = await streamToString(result);
    return base64Img;
    
  } catch (error) {
    console.log(error)
  }
}

export default getCombinedImages;