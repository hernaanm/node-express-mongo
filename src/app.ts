import express from 'express'
import exphbs from 'express-handlebars'
import morgan from 'morgan'
import path from 'path'
import indexRouts from './routes'
import tasksRouts from './routes/tasks'

class Application{

    app: express.Application;

    constructor(){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }


    settings(){
        this.app.set('port', process.env.PORT);
        this.app.set('views', path.join(__dirname, 'views'));
        this.app.engine('.hbs', exphbs({
            layoutsDir: path.join(this.app.get('views'), 'layout'),
            partialsDir: path.join(this.app.get('views'), 'partials'),
            defaultLayout: 'main',
            extname: '.hbs'
        }))
        this.app.set('view engine','.hbs');
    }

    middlewares(){
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended : false}));
    }

    routes(){
        this.app.use(indexRouts);
        this.app.use('/tasks',tasksRouts);
    }

    start(){
        this.app.listen(this.app.get('port'), () => {
            console.log('Server running on port', this.app.get('port'));
        })
    }
}

export default Application;