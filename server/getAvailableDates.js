import { Client, NaturalColorController } from 'nasa-epic-apilib';

const client = new Client({
  timeout: 0,
})
const naturalColorController = new NaturalColorController(client);


// get the latest image date
const getAvailableDates = async () => {
  try {
    const { result } = await naturalColorController.getAllAvailableDates();
    return result[0].date;
  } catch(error) {
   console.log(error)
  }
}

export default getAvailableDates;