const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database('./loans.db' , sqlite3.OPEN_READWRITE , (error) => {
if (error){
    console.log("Unable to connect t the DB");
}  else {
    console.log("DB got connected");
}

});

module.exports = db;