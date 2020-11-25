import express from 'express';
import { usersRoutes } from './routes/user.routes';
import { bookRoutes } from './routes/book.routes'
import { authorRoutes } from './routes/author.routes'

const app = express();

app.use(express.json());

app.set('port', 8080);

app.listen(app.get('port'), () => console.log("-------------------------------Server is running in port 8080---------------------------------------"));

app.use('/users', usersRoutes.router );
app.use('/books', bookRoutes.router );
app.use('/authors', authorRoutes.router );


