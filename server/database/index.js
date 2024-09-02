const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://rajasekhart2529:Sunny%402529@mern-youtube-task-manag.robbgay.mongodb.net/"
  )
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));