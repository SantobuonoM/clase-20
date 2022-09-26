/** dotenv o config */


import express from "express";



//-->>router 




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/personas", personasRouter);

export default app;
/** routes */
