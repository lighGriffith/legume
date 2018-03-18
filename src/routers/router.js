var express = require('express');
var User = require('../models/UserSchema');
var Commande =require('../models/CommandeSchema');
var Produit = require('../models/ProduitSchema')

var itemRouter = express.Router();



itemRouter
    .route('/produits')
    .post(function (request, response) {

        console.log('POST /produits');

        var produit = new Produit(request.body);
        produit.vendeur=request.session.user.local.name;
        produit.save();

        response.status(201).send(produit);
    })
    .get(function (request, response) {

        console.log('GET /produits');

        Produit.find({ vendeur: request.session.user.local.name },function (error, items) {

            if (error) {
                response.status(500).send(error);
                return;
            }
            console.log(items);

            response.json(items);
        });
    });

itemRouter
    .route('/produits/:vendeur')
    .get(function (request, response) {

        console.log('GET /produits/:vendeur');

        var vendeur = request.params.vendeur;
        Produit.find({ vendeur: vendeur }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            console.log(item);

            response.json(item);

        });
    })

itemRouter
    .route('/produit/:idProduit')
    .get(function (request, response) {

        console.log('GET /produit/:idProduit');

        var idProduit = request.params.itemId;
        Produit.find({ idProduit: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            console.log(item);

            response.json(item);

        });
    })
    .put(function (request, response) {

        console.log('PUT /produit/:itemId');

        var itemId = request.params.itemId;

        Produit.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.name = request.body.name;
                item.description = request.body.description;
                item.quantity = request.body.quantity;

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .patch(function (request, response) {

        console.log('PATCH /produit/:itemId');

        var itemId = request.params.itemId;

        Produit.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {

                for (var property in request.body) {
                    if (request.body.hasOwnProperty(property)) {
                        if (typeof item[property] !== 'undefined') {
                            item[property] = request.body[property];
                        }
                    }
                }

                // if (request.body.name) {
                //   item.name = request.body.name;
                // }

                // if (request.body.description) {
                //   item.description = request.body.description;
                // }

                // if (request.body.quantity) {
                //   item.quantity = request.body.quantity;
                // }

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .delete(function (request, response) {

        console.log('DELETE /produit/:idProduit');

        var idProduit = request.params.idProduit;

        Produit.findById( idProduit , function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.remove(function (error) {

                    if (error) {
                        response.status(500).send(error);
                        return;
                    }

                    response.status(200).json({
                        'message': 'Item with id ' + idProduit + ' was removed.'
                    });
                });
            } else {
                response.status(404).json({
                    message: 'Item with id ' + idProduit + ' was not found.'
                });
            }
        });
    });

itemRouter
    .route('/commandes')
    .post(function (request, response) {

        console.log('POST /commandes');

        var item = new User(request.body);

        item.save();

        response.status(201).send(item);
    })
    .get(function (request, response) {

        console.log('GET /commandes');

        Commande.find(function (error, items) {

            if (error) {
                response.status(500).send(error);
                return;
            }
            console.log(items);

            response.json(items);
        });
    });
itemRouter
    .route('/commande/:itemId')
    .get(function (request, response) {

        console.log('GET /commande/:acheteurId');

        var itemId = request.params.itemId;
        Commande.find({ idAcheteur: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            console.log(item);

            response.json(item);

        });
    })
    .put(function (request, response) {

        console.log('PUT /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ _id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.name = request.body.name;
                item.description = request.body.description;
                item.quantity = request.body.quantity;

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .patch(function (request, response) {

        console.log('PATCH /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {

                for (var property in request.body) {
                    if (request.body.hasOwnProperty(property)) {
                        if (typeof item[property] !== 'undefined') {
                            item[property] = request.body[property];
                        }
                    }
                }

                // if (request.body.name) {
                //   item.name = request.body.name;
                // }

                // if (request.body.description) {
                //   item.description = request.body.description;
                // }

                // if (request.body.quantity) {
                //   item.quantity = request.body.quantity;
                // }

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .delete(function (request, response) {

        console.log('DELETE /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.remove(function (error) {

                    if (error) {
                        response.status(500).send(error);
                        return;
                    }

                    response.status(200).json({
                        'message': 'Item with id ' + itemId + ' was removed.'
                    });
                });
            } else {
                response.status(404).json({
                    message: 'Item with id ' + itemId + ' was not found.'
                });
            }
        });
    });

itemRouter
    .route('/items')
    .get(function (request, response) {

        console.log('GET /items');
        var myUser=request.session.user;
        User.find({ 'local.typeFermier':(myUser.local.typeFermier=="0"?'1':'0')  }).exec(function (error, items) {

            if (error) {
                response.status(500).send(error);
                return;
            }
            console.log(items);

            response.json(items);
        });
    });

itemRouter
    .route('/items/:itemId')
    .get(function (request, response) {

        console.log('GET /items/:itemId');
        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            console.log(item);

            response.json(item);

        });
    })
    .put(function (request, response) {

        console.log('PUT /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.name = request.body.name;
                item.description = request.body.description;
                item.quantity = request.body.quantity;

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .patch(function (request, response) {

        console.log('PATCH /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {

                for (var property in request.body) {
                    if (request.body.hasOwnProperty(property)) {
                        if (typeof item[property] !== 'undefined') {
                            item[property] = request.body[property];
                        }
                    }
                }

                // if (request.body.name) {
                //   item.name = request.body.name;
                // }

                // if (request.body.description) {
                //   item.description = request.body.description;
                // }

                // if (request.body.quantity) {
                //   item.quantity = request.body.quantity;
                // }

                item.save();

                response.json(item);
                return;
            }

            response.status(404).json({
                message: 'Item with id ' + itemId + ' was not found.'
            });
        });
    })
    .delete(function (request, response) {

        console.log('DELETE /items/:itemId');

        var itemId = request.params.itemId;

        User.findOne({ id: itemId }, function (error, item) {

            if (error) {
                response.status(500).send(error);
                return;
            }

            if (item) {
                item.remove(function (error) {

                    if (error) {
                        response.status(500).send(error);
                        return;
                    }

                    response.status(200).json({
                        'message': 'Item with id ' + itemId + ' was removed.'
                    });
                });
            } else {
                response.status(404).json({
                    message: 'Item with id ' + itemId + ' was not found.'
                });
            }
        });
    });


module.exports = itemRouter;

