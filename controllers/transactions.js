const Transaction = require('../models/Transaction')
module.exports = {
  all: function(req, res) {
    Transaction.find()
    .populate('booklist')
    .exec()
    .then(data=>{
      res.status(200).json({
        message: 'success',
        data
      })
    })
    // Transaction.find(function (err, transactions) {
    //   if (err) {
    //     res.send({err: err})
    //   }
    //   res.send(transactions)
    // })
  },
  create: function(req, res) {
    let input = {
      memberid: req.body.memberid,
      days: req.body.days,
      price: req.body.price,
      booklist: req.body.booklist
    }
    var transaction = new Transaction(input);
    transaction.save().then(data=>{
      res.status(200).json({
        message: 'success',
        data
      })
    })
  },
  update: function(req, res) {
    Transaction.update({ _id: req.params.id }, {
      $set: req.body
    }, function(err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    });
  },
  deleted: function(req, res) {
    Transaction.remove({ _id: req.params.id }, function (err, result) {
      if (err) {
        res.send({err: err})
      }
      res.send(result)
    })
  }
}
