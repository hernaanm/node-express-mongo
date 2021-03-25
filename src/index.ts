import application from './app'
import database from './database'


//Starting server
database();
const app = new application();
 app.start();