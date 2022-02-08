var mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect('mongodb+srv://clarisse:poc2022@clusterlectio.kfbdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true});

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;