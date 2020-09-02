var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "Title",
    message: "Title:"
  },
  {
    type: "input",
    name: "Description",
    message: "Description:"
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents:"
  },
  {
    type: "input",
    name: "Installation",
    message: "Installation:"
  },
  {
    type: "input",
    name: "Usage",
    message: "Usage:"
  },
  {
    type: "input",
    name: "License",
    message: "License:"
  },
  {
    type: "input",
    name: "Contributing",
    message: "Contributing:"
  },
  {
    type: "input",
    name: "Tests",
    message: "Tests:"
  },
  {
    type: "input",
    name: "Questions",
    message: "Please type any questions:"
  },
]).then(function(data) {
console.log(data)
console.log(data.Title)
  var filename = data.Title + ".md";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});