const mongoose = require('mongoose');

mongoose.connect("mongodb://mongo:eTxTs2Gco5NuuyGTQkJ0@containers-us-west-186.railway.app:6104", {useNewUrlParser: true}*/);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Database Connected !!!");
});
