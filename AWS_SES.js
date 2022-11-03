const express = require("express");
const {json} = require("express")
const cors = require("cors");
const app = express();
const router = require("./routes/router");

app.use(json({extended: false}));
app.use(cors());
app.use(router);


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.json({message: "Hello World!"})
})