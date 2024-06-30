import express from "express";
import http from "http";
import router from "../routes";

const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

app.use("/", router());
