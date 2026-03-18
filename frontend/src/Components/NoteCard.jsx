import { Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import { formatDate } from "../lib/utils";
import instance from "../lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, noteId) => {
    e.preventDefault();
    if (!window.confirm("Delete this note?")) return;
    try {
      await instance.delete(`/notes/${noteId}`);
      setNotes((prev) => prev.filter((n) => n._id !== noteId));
      toast.success('Note deleted');
    } catch (error) {
      console.error('Error deleting note:', error);
      toast.error('Failed to delete note');
    }
  };

  return (
    <Link to={`/note/${note._id}`} className="card bg-base-100 note-card border border-base-300 no-underline text-base-content">
      <div className="card-body p-5">
        <h3 className="font-display text-lg font-medium leading-snug mb-1">{note.title}</h3>
        <p className="text-base-content/60 text-sm leading-relaxed line-clamp-3 mb-4">
          {note.content.slice(0, 120)}{note.content.length > 120 ? '…' : ''}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs text-base-content/40">{formatDate(new Date(note.createdAt))}</span>
          <button
            className="btn btn-ghost btn-xs text-base-content/40 hover:text-error hover:bg-error/10"
            onClick={(e) => handleDelete(e, note._id)}
            title="Delete note"
          >
            <Trash2Icon size={14} />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default NoteCard;
