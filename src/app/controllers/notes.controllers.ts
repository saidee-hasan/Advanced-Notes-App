import express, { Request, Response } from 'express';
import { Note } from '../modules/notes.model';

const notesRoutes = express.Router();

// CREATE note
notesRoutes.post('/notes', async (req: Request, res: Response) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return res.status(400).json({
        success: false,
        message: "Request body is missing"
      });
    }

    const note = await Note.create(req.body);
    res.status(201).json({
      success: true,
      message: "Note created successfully",
      note
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create note",
      error: error.message
    });
  }
});

// READ all notes
notesRoutes.get('/notes', async (_req: Request, res: Response) => {
  try {
    const notes = await Note.find();
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      notes
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch notes",
      error: error.message
    });
  }
});

// READ single note
notesRoutes.get('/notes/:id', async (req: Request, res: Response) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Note fetched successfully",
      note
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch note",
      error: error.message
    });
  }
});

// UPDATE note
notesRoutes.put('/notes/:id', async (req: Request, res: Response) => {
  try {
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Note updated successfully",
      note: updatedNote
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update note",
      error: error.message
    });
  }
});

// DELETE note
notesRoutes.delete('/notes/:id', async (req: Request, res: Response) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);

    if (!deletedNote) {
      return res.status(404).json({
        success: false,
        message: "Note not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      note: deletedNote
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete note",
      error: error.message
    });
  }
});

export default notesRoutes;
