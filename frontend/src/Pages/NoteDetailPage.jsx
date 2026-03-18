import React, { useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router';
import instance from '../lib/axios';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '../Components/Navbar';

const NoteDetailPage = () => {
  const [note, setNote] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [saving, setSaving] = React.useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await instance.get(`/notes/${id}`);
        setNote(response.data);
      } catch (error) {
        console.error('Error fetching note:', error);
        toast.error('Could not load note');
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Delete this note? This can't be undone.")) return;
    try {
      await instance.delete(`/notes/${id}`);
      toast.success('Note deleted');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.status === 429 ? 'Too many requests, please wait' : 'Failed to delete note');
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error('Title and content are required');
      return;
    }
    setSaving(true);
    try {
      await instance.put(`/notes/${id}`, note);
      toast.success('Changes saved');
      navigate('/');
    } catch (error) {
      toast.error(error.response?.status === 429 ? 'Too many requests, please wait' : 'Failed to save note');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="flex justify-center pt-24">
          <span className="loading loading-spinner loading-md text-neutral" />
        </div>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="text-center pt-20 text-base-content/50">Note not found.</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10 page-enter">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost btn-sm gap-2">
            <ArrowLeftIcon size={15} />
            Back
          </Link>
          <button onClick={handleDelete} className="btn btn-ghost btn-sm text-error gap-2">
            <Trash2Icon size={15} />
            Delete
          </button>
        </div>

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body gap-0">
            <h1 className="font-display text-2xl font-normal mb-1">Edit Note</h1>
            <p className="text-base-content/50 text-sm mb-6">Make your changes and save when ready.</p>

            <div className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">Title</span>
                </label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={note.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">Content</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full h-52 leading-relaxed"
                  value={note.content}
                  onChange={(e) => setNote({ ...note, content: e.target.value })}
                />
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <Link to="/" className="btn btn-ghost">Discard</Link>
                <button onClick={handleSave} className="btn btn-neutral" disabled={saving}>
                  {saving && <span className="loading loading-spinner loading-xs" />}
                  {saving ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetailPage;
