const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();
const dataHandler = require('./dataHandler');
const port = 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/getJiraTickets',function(req,res){
  dataHandler.fetchGitHubData().then((results)=>{
    res.json({
      jirasObject: results
    })
  })
});

router.get('/getNumber/:number',function(req,res){
    res.json({
      number: req.params.number
    })
});

app.use(express.static('public'))
app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})