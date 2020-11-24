import express from 'express';
import { usersRoutes } from './routes/user.routes';

const app = express();

app.use(express.json());

app.set('port', 8080);

app.listen(app.get('port'), () => console.log("Server is running in port 8080"));

app.use('/users', usersRoutes.router )

