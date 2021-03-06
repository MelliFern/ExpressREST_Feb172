'use strict';
var Blog = require('../model/model.js');
var bodyparser = require('body-parser');

module.exports = function(app) {

app.use(bodyparser.json()); 

app.get('/blogs', function(req,res){
  Blog.find({},{'title':1, _id:0 },function(err,data){
    if (err) return res.status(500).send({'msg': 'could not retrieve Blogs'});
    res.json(data); 
  });
});//app.get

app.post('/blogs', function(req,res){
  var newBlog = new Blog(req.body); 
  newBlog.save(function(err,blog){
    if (err) return res.status(500).send({'msg': 'could not save Blog'});
      res.json(blog);
  });

});//app.post

app.put('/blogs/:id', function(req,res){
  var updateBlog = req.body; 
  //updateBlog.blog_id = req.params.id;
  //delete updateBlog._id; 
  var query={'blog_id':req.params.id};
  Blog.update(query,updateBlog,function(err){
    if(err) return res.status(500).send({'msg': 'could not save Blog'});
    res.json(req.body);  
  });
});// app.put


app.delete('/blogs/:id', function(req,res){
  var query = {'blog_id': req.params.id};
  var query={'blog_id':req.params.id};
  Blog.remove(query,function(err){
            if(err) return res.status(500).send({'msg': 'could not save Blog'});
            else { 
              Blog.find(query,{'title':1, _id:0 },function(err,data){
                if (err) return res.status(500).send({'msg': 'could not retrieve Blogs'});
                res.json(data); 
          });
      }
    });
  });// app.delete


};
