import Event from "./models/event.model.js";
import initializeDb from "./db/db.connect.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

initializeDb();

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

//get all events
app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    if (!events || events.length === 0)
      res.status(404).json({ error: "No events were found." });
    else res.json(events);
  } catch (error) {
    console.log("Error fetching the data.");
  }
});

app.get("/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) res.status(404).json({ error: "No event was found." });
    else res.json(event);
  } catch (error) {
    console.log("Error fetching the data.");
  }
});

app.post("/events", async (req, res) => {
  try {
    const newEvent = await new Event(req.body).save();
    res.status(201).json({ message: "Successfully added an event.", newEvent });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: error.message || "Failed to add a new event" });
  }
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log("Server is running.");
});
