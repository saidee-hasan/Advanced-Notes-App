import { model, Schema } from "mongoose";

// Note schema and model
const noteSchema = new Schema({
  title: { type: String, required: true, trim: true },
  content: { type: String, default: " " },
  category: {
    type: String,
    enum: ["personal"],
    default: "personal"
  },
  pinned: { type: Boolean, default: false }
}, { timestamps: true });

export const Note = model("Note", noteSchema);

