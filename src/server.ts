
import dotenv from 'dotenv';
import { app } from './app';
import { connectToDatabase } from './db/database';

const envConfig = dotenv.config();

const PORT = process.env.PORT ?? 8081;




const startServer = async () => {
    try {

        await connectToDatabase();
        console.log('database connected');
        const server = app.listen(PORT, () => {
            console.log(`server process running on port ${PORT}`);
        });

    } catch (error) {
        console.log('Database Connection Error: ', error);

    }

};

startServer();