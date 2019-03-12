let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let db = require('./models');
let apiRoutes = require('./app/routes/apiRoutes');

//add PORT 
let PORT = process.env.PORT || 3000;



//set up the express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//static directory 
app.use(express.static('app/public'));

apiRoutes(app, db);
db.sequelize.sync().then(function (){
    app.listen(PORT, function(){
        console.log(`Listening on PORT ${PORT}`);
    });
})





