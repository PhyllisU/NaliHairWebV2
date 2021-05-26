var mongoose = require('mongoose');


var user = process.env.MONGO_USER;
var password = process.env.MONGO_PWD;
var dbName = process.env.MONGO_URL;

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology : true,
    useNewUrlParser: true,
}
//mongodb+srv://${user}:${password}@${dbName}
//mongodb+srv://Phy:Phyphou123@cluster0.otd6c.mongodb.net/Nali?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${user}:${password}@${dbName}`,
options,
function(err) {
 if (err) {
   console.log(`error, failed to connect to the database because --> ${err}`);
 } else {
   console.info('*** Database NaliHairWeb connection : Success ***');
 }
}
);

module.exports = mongoose