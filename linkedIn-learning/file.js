const fs = require("fs");

fs.readFile("./Readme.md", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});

let md =
        `
 This is a new file
 ==================
 + template string
 + Node file system
`

fs.writeFileSync("./Readme.md", md.trim(), () => {
    console.log("Successfully written");
});


fs.appendFileSync("./Readme.md", md.trim(), (err) => {
    console.log("Successfully written");
});