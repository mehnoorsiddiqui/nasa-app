import { ApiError, Client, NaturalColorController } from 'nasa-epic-apilib';

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

export default getAvailableDates;