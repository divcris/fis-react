var index = require('../model/index.js');
var util = require('../lib/util.js');

module.exports = function(req, res){
    res.render('app/page/book/index.tpl', {
        title: 'fis学习'
    });
};