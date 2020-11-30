import express from 'express';
import { usersRoutes } from './routes/user.routes';
import { bookRoutes } from './routes/book.routes'
import { authorRoutes } from './routes/author.routes'
import { authRouter } from './routes/auth.routes';
import socketio from "socket.io";
import path from "path";

const app = express();

app.use(express.json());

app.set('port', 8080);

<<<<<<< HEAD
app.get("/", (req: any, res: any ) => {
    res.sendFile(path.resolve("./index.html"));
});


const server = app.listen(app.get("port"), () => {
    console.log(`listening on ${app.get('port')}`);
    
});

let io = new socketio.Server(server);

io.on("connection", (socket:any) => {

    console.log("An user connected");

    socket.on('message', (message: any) => {

        io.emit('message', message);

    })
    
});
=======
app.listen(app.get('port'), () => console.log("-------------------------------Server is running in port 8080---------------------------------------"));
>>>>>>> 2ab733eb3502fcd26a55d663bc555c1d8e9c679c

app.use('/users', usersRoutes.router );
app.use('/books', bookRoutes.router );
app.use('/authors', authorRoutes.router );
app.use('/auth', authRouter.router);


