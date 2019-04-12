const mongoose = require('mongoose'),
    coinModel = require('../models/Coin');

const CoinController = {};

CoinController.getAll = function (req, res) {
    coinModel.find({},function(err, coins){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ ok:true , coins});
        }
    });
};

CoinController.get = function (req, res) {
    coinModel.findOne({_id: req.params.id }, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
}
CoinController.getPorDisponibilidad = function (req, res) {
    coinModel.find({isAvailable: req.params.status}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
}

CoinController.getPorPais = function (req, res) {
    coinModel.findOne({country: req.params.country}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
}

CoinController.getPorNombre = function (req, res) {
    coinModel.findOne({name: req.params.name}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
}
CoinController.getPorAnio = function (req, res) {
    coinModel.findOne({year: req.params.year}, function(err, coin){
        if (err) {
            res.status(500);
            res.json({code:500, err});
        } else {
            res.json({ok: true, coin});
        }
    });
}


module.exports = CoinController;