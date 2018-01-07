
const dbl = require('./dbl/dbOperation');
const productCrtl = require('./route/productController');
const middlewares = require('./middlewares/allMWare');
const express = require('express')

class App {

    static async run() {
        try {
            let app = express();
            await dbl.dbConnect();
            await middlewares.init(app);
            await productCrtl.init(app);
            return app.listen(8080);

        } catch (error) {
            throw error;
        }
    }
}

App.run().then((data) => {
    console.log('server started on : 8080');

}).catch((error) => {
    console.log(`Error!  ${error}`);
    process.exit(1);
});