import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import RateLimit from '../Components/RateLimit';
import NoteCard from '../Components/NoteCard';
import instance from '../lib/axios';
import NotesNotFound from '../Components/NotesNotFound';

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await instance.get('/notes');
        setNotes(response.data);
        setIsRateLimited(false);
      } catch (error) {
        if (error.response?.status === 429) setIsRateLimited(true);
      } finally {
        setLoading(false);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimit />}

      <div className="max-w-5xl mx-auto px-6 py-10 page-enter">
        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="flex items-center gap-3 mb-7">
            <h2 className="font-display text-2xl font-normal text-base-content">Your Notes</h2>
            <span className="badge badge-neutral badge-outline">{notes.length}</span>
          </div>
        )}

        {loading && (
          <div className="flex justify-center pt-20">
            <span className="loading loading-spinner loading-md text-neutral" />
          </div>
        )}

        {!loading && notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {!loading && notes.length > 0 && !isRateLimited && (
          <div className="note-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} setNotes={setNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
