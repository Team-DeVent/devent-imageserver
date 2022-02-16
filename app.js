import express from 'express';

import * as loaderExpress from './loaders/express.js';


async function startExpressServer() {
    const app = express();

  
    await loaderExpress.init(app);
  
    app.listen(9001, err => {
        console.log(`[ + ] The server is running.`);
    });
}
  
startExpressServer();
