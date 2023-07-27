var fs = require("fs");

//create file
fs.writeFile("read.txt", "today is awesome day", (err) => {
  console.log("file is create");
  console.log(err);
});

// append file ( add data)
fs.appendFile("read.txt", "manishaaaaaaaaaaaaaaaaaa", (err) => {
  console.log("tast complete");
});

fs.open("read.txt", "w", (err) => {
  if (err) throw err;
  console.log("Saved!");
});

//read data
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});

fs.rename('read.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

//Delete
// fs.unlink("read.txt", (err) => {
//   if (err) throw err;
//   console.log("File deleted!");
// });
