import express, { Response } from "express";
import { connectDB } from "./config";
import routes from "./utils/routes";
import cors from "cors";

const app = express();
const port = process.env.PORT || 4001; 

// Connect to Database
connectDB();

// Middleware
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors()); 

// Routes
app.use('/api', routes()); 

// Health Check Endpoint
app.get("/healthCheck", (_, res) =>
  res.status(200).json({
    status: "OK"
  })
);

// Test Route
app.get('/', (_, res: Response) =>
  res.send({
    status: 'OK',
    message: `Blogr Server is up and running`,
    express: `http://localhost:${port}`
  })
);

// Start the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
