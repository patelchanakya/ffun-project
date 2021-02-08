const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());



const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const vehiclesRouter = require('./routes/vehicles');

app.use('/vehicles', vehiclesRouter);

// app.get("/search", async (request, response) => {
//   try {
//     let result = await collection.aggregate([
//       {
//         "$search": {
//           "autocomplete": {
//             "query": `${request.query.term}`,
//             "path": "make",
//             "fuzzy": {
//               "maxEdits": 2
//             }
//           }
//         }
//       }
//     ]).toArray();
//     response.send(result);
//   } catch (e) {
//     response.status(500).send({ message: e.message });
//   }
// });




app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})