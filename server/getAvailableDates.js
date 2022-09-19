//STEP 1: Copy the entire code sample from the Portal here
import { ApiError, Client, NaturalColorController } from 'nasa-epic-apilib';

const client = new Client({
  timeout: 0,
})
const naturalColorController = new NaturalColorController(client);

const getAvailableDates = async () => {
  //STEP 2: Move the try-catch statement from the code sample copied in STEP 1 here
  try {
    const { result, ...httpResponse } = await naturalColorController.allAvailableDates();
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
    return result[0].date;  
  } catch(error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
}


export default getAvailableDates;