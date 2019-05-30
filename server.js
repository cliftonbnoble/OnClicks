var express = require('express');
var formidable = require('formidable');
const path = require('path');
const vision = require('@google-cloud/vision');
var app = express();
const PORT = process.env.PORT || 3009
var mongoose = require("mongoose");


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/ai-search")
var artcileSchema = mongoose.Schema({
    text: String,
    date: String
})

var Article = mongoose.model("Article", artcileSchema)
//var visionText;

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res){
    res.sendFile(__dirname + '/public/index.html');
});

//Routes saves article description to DB
app.post("/add-to-db", function(req, res){
    console.log(req.body)

    Article.create({
        text: req.body.data,
        date: Date()
    }).then(function(data){
        res.send(data);
    }).catch(function(err){
        res.send(err);
    })
    
})

app.get("/api", function(req, res) {
    Article.find({}, function(err, data){
        console.log(">>>> " + data );
    });
});

app.post('/', function (req, res){
    var form = new formidable.IncomingForm();
    let dataToReturn = '';
    //GOOGLE AI
    const visionClient = new vision.ImageAnnotatorClient({
        keyFilename: './project.json'
    })

    form.parse(req);

    form.on('fileBegin', async function (name, file){
        file.path = __dirname + '/data/' + file.name;
        let imagePath = file.path;
        dataToReturn = await detectTextFromImage(imagePath);
    });

    async function detectTextFromImage(imagePath) {
        const [textResult] = await visionClient.textDetection(imagePath);
        const text = textResult.textAnnotations;
        let visionText = text[0].description;
        // console.log(visionText);
        return res.status(200).json({
            return: visionText                  
        });
    }

    form.on('file', function (name, file){
        console.log('Uploaded ' + file.name);
    });
    
    //Remove the return and write file.name to the database
    //also decide the route after writing to DB
    
    
});


app.listen(PORT, () => console.log('Server app listening on port http://localhost:'+PORT))
