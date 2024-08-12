const express = require('express');
const path = require('path');
const hbs = require('hbs')
const app = express();

// Set the directory where your template files are located
//app.set('views', path.join(__dirname, 'tamplates/views'));

// Serve static files from the "public" directory
const staticPath = path.join(__dirname,'public');
const template_path = path.join(__dirname,'tamplates/views');
const partials_path = path.join(__dirname,'tamplates/partials');

// Set Handlebars as the view engine
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.use(express.static(staticPath))
// Define a route that renders a Handlebars view
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});
app.get('/weather',(req, res)=>{
  res.render('weather')
})
app.get("*",(req, res)=>{
  res.render("404error",{
    errorMSG : "oops ! Page Note FOund"
  })
})

// Start the server
const port = 5500;
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
