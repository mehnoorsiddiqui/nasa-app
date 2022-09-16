// Import the dependencies
import express from 'express'
import api from './api'

// Create an express server
const app = express();


app.use("/api", api);

if (process.env.NODE_ENV === 'production') {
  console.log(`__dirname = ${__dirname}`);
  app.use(express.static(path.join(__dirname, '..', 'dist')));
  app.use(express.static(path.join(__dirname, '..', 'public')));

  app.listen(5000, () => console.log('listening on port 5000'));
}

// module.exports = app;
export default app;