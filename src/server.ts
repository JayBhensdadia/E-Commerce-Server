
import dotenv from 'dotenv';
import { app } from './app';
import { connectToDatabase } from './db/database';
import { seedTheDataBase } from './utils/seed';


//load environment configurations
const envConfig = dotenv.config();


//load port from env
const PORT = process.env.PORT ?? 8081;



//starting configurations of server
//e.g. do not start if database is down
const startServer = async () => {
    try {

        await connectToDatabase();
        console.log('database connected');


        const NODE_ENV = process.env.NODE_ENV ?? 'DEV';

        if (NODE_ENV === 'DEV') {
            console.log('⏱️ seeding database ......');
            await seedTheDataBase();
        }

        const server = app.listen(PORT, () => {
            console.log(`server process running on port ${PORT}`);
        });

    } catch (error) {
        console.log('Database Connection Error: ', error);

    }

};


//start the server
startServer();