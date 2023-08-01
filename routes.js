const express = require("express");
const ErrorHandler = require("./middleware/error");
const route = express();

// import controllers


// import router
app.use("/ug-applicants", );
app.use("/ug-students", );
app.use("/bios", );
app.use("/activities", );
app.use("/honors", );
app.use("/essays", );

route.use(ErrorHandler);
module.exports = route;
