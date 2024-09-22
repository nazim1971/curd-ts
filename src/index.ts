import express, {Response, Request} from "express";
import connectDB from "./db/db";
import productsRoute from "./routes/productsRoute";

const app = express();
const port = process.env.PORT || 5000;

//middlewire
app.use(express.json());




const startServer = async () => {
    try {
      // Connect to the database
      await connectDB();
      

      app.use('/v1',productsRoute);

      app.get('/', (req:Request,res:Response)=>{
        res.json("My Curd is on Fire")
      } )
      app.listen(port, () => {
        console.log(` Server is running on port ${port}`);
      });
    } catch (error) {
      console.error("Failed to connect to the database:", error);
      process.exit(1); // Exit the process if the connection fails
    }
  };
  
  // Call the function to start the server
  startServer();