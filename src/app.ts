import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(bodyParser.json());

const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
http.listen(process.env.PORT, () => {
  console.log(`Listening on port *: ${process.env.PORT}`);
});
app.get("/healthcheck", function (req, res) {
  return res.status(200).json([]);
});
io.on("connection", (socket: any) => {
  try {
    var query = socket.handshake.query;

    var roomNames = [];

    if (query.address) {
      roomNames.push(query.address);
    }

    if (query.type) {
      query.type.split(",").forEach((room: string) => {
        roomNames.push(room);
      });
    }

    const logData: string[] = []
    roomNames.forEach((room: string) => {
      socket.join(`${room}`);
      logData.push(`${room}`)
    });

   
  } catch (error: any) {
    console.log("socketError::", error?.toString());
  }
});
