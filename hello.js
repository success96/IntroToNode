const express = require("express");
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// for (let i = 0; i < 10; i++) {
//   console.log("Hello from Hello.js");
// }
