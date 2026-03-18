import { Link } from "react-router";

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center max-w-sm mx-auto">
      <div className="bg-base-200 rounded-full p-6 mb-6">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-base-content/30">
          <path d="M8 6h18l8 8v22a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M26 6v8h8" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M13 20h14M13 26h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
      <h3 className="font-display text-2xl font-normal text-base-content mb-3">No notes yet</h3>
      <p className="text-base-content/50 text-sm leading-relaxed mb-6">
        Capture your thoughts, ideas, and everything in between.
      </p>
      <Link to="/create" className="btn btn-neutral">Create your first note</Link>
    </div>
  );
};

export default NotesNotFound;
