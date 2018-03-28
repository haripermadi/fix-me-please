const Book = require('../models/Book')

module.exports = {
  all: function(req, res) {
    Book.find(function (err, books) {
      if (err) {
        res.send({err: err})
      }
      res.send(books)
    })
  },
  create: function(req, res) {
    console.log("ini create book",req.body)
    let input = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    // res.status(200).json({
    //   message: 'success',
    //   input
    // })
    var book = new Book(input);
    book.save().then(data=>{
      res.status(200).json({
        message: 'success',
        data
      })
    })
  },
  update: function(req, res) {
    let id = {_id:req.params.id}

    let input = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
      
    Book.findOneAndUpdate(id,input,{new:true},(err,beforeUpdate)=>{
      if(!err){
        res.status(200).json({
          message:"update success",
        })
      }else{
        res.status(400).json({
          message:"error",
          err
        })
      }
    })
  },
  deleteb: function(req, res) {
    Book.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  }
}
