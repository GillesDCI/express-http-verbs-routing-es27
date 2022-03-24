//importing express library to build webservers. 
import express from 'express';

//importing routes 
import teaRoutes from './routes/teaRoutes.js';
import userRoutes from './routes/userRoutes.js';
import settingsRoutes from './routes/settingsRoutes.js';

//declare app which allows us to use the web app functionalities.
const app = express();

//allows us to send json information to the server (this is configuration)
app.use(express.json());

//configure routes 
app.use('/api/teas', teaRoutes);
app.use('/api/users', userRoutes);
app.use('/api/settings', settingsRoutes);


//listening for requests on port 3001
app.listen(3001, ()=> {
    console.log("The sever is listening for requests....");
})