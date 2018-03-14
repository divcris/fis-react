var index = require('app:debug/app/app/model/index');
var util = require('app:debug/app/app/lib/util');

module.exports = function(req, res){
    res.render('app/page/index.tpl', index.getData());
};