import application from './app';
import database from './database';
require('dotenv').config()


//Starting server
database();
const app = new application();
 app.start();