import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: String,
    hostedBy: String,
    eventType: String,
    startTime: String,
    endTime: String,
    address: String,
    price: Number,
    imgUrl: String,
    details: String,
    dressCode: String,
    ageRestriction: String,
    tags: [String],
    speakers: [
      {
        name: String,
        photoUrl: String,
        designation: String,
      },
    ],
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
export default Event;
