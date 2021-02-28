const exprss = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname+'/dist/angular-on-hero'));
app.get("/*",function(req,res){
  req.sendFile(path.join(__dirname+'/dist/angular-on-hero/index.html'));
});

app.listen(process.env.PORT || 8080);
