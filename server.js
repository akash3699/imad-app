var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
        'article-one':{
        title:'Article One | AKash WaDhawane',
        heading: 'Article One',
        date: 'Feb 16 2018',
        content:`
                    <p>
                        This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.
                        
                    </p>
                    <p>
                        This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.
                        
                    </p>
                    <p>
                        This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.This is content for first Article.
                        
                    </p>` 
        },
        'article-two':{
        title:'Article Two | AKash WaDhawane',
        heading: 'Article Two',
        date: 'Feb 16 2018',
        content:`
                    <p>
                        This is content for Second Article. 
                    </p>` 
        },
        'article-three':{
        title:'Article Three | AKash WaDhawane',
        heading: 'Article Three',
        date: 'Feb 16 2018',
        content:`
                    <p>
                        This is content for Third Article. 
                    </p>` 
        }
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    var htmlTemplate=`
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>

    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
                
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>
    
    `
    return htmlTemplate;
    
    
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/banner.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'banner.jpg'));
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName ]));
});

var names=[];
app.get('/submit-name/:name',function(req,res){
   var name=req.params.name;
   names.push(name);
   res.send(names);
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
