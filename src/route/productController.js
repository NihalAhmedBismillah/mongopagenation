/**
 * Import npm modules
 */

const product = require('../model/product');

class ClsProductController {

    static init(app) {

        return new Promise((resolve, reject) => {


            app.get('/product', (req, res, next) => {

                res.render('main/addproduct');
            })
            app.post('/product', (req, res, next) => {

                product.insertProduct(req.body).then((result) => {
                    // res.render('main/addproduct');
                    res.send('ok');
                });

            });
            app.get('/productlist/:page', (req, res) => {

                product.getProudctList(req).then((products) => {
                    res.render('main/productlist', products);
                    // res.send('ok');
                });

            })
            app.get('/fakeproduct', (req, res) => {

                product.saveDummayProuduct(req).then((products) => {
                    //res.render('main/productlist', { products: products, newArrivalList: 'From Mumbai and Delhi' });
                    res.send('dummy proudct inserted!');
                });

            })

            resolve(true);
        });
    }
}

module.exports = ClsProductController;