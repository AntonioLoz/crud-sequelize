import express from 'express';
import { authorRoutes } from './routes/author.routes';
import { bookRoutes } from './routes/book.routes';
import { usersRoutes } from './routes/user.routes';

const app = express();

app.use(express.json());

app.set('port', 8080);

app.listen(app.get('port'), () => console.log("Server is running in port 8080"));

app.use('/users', usersRoutes.router );
app.use('/books', bookRoutes.router );
app.use('/author', authorRoutes.router );


