import React from 'react'
import { Link, useNavigate } from 'react-router'
import { ArrowLeftIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import instance from '../lib/axios'
import Navbar from '../Components/Navbar'

const CreatePage = () => {
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error('Title and content are required');
      return;
    }
    setLoading(true);
    try {
      await instance.post('/notes', { title, content });
      toast.success('Note created!');
      navigate("/");
    } catch (error) {
      console.error('Error creating note:', error);
      toast.error(error.response?.status === 429 ? 'Too many requests, please wait' : 'Failed to create note');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-10 page-enter">
        <Link to="/" className="btn btn-ghost btn-sm gap-2 mb-6">
          <ArrowLeftIcon size={15} />
          Back
        </Link>

        <div className="card bg-base-100 border border-base-300 shadow-sm">
          <div className="card-body gap-0">
            <h1 className="font-display text-2xl font-normal mb-1">New Note</h1>
            <p className="text-base-content/50 text-sm mb-6">Capture your thoughts before they slip away.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Give your note a title..."
                  className="input input-bordered w-full"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </div>

              <div className="form-control">
                <label className="label pb-1">
                  <span className="label-text font-semibold text-xs uppercase tracking-wider">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here..."
                  className="textarea textarea-bordered w-full h-44 leading-relaxed"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>

              <div className="flex justify-end gap-2 mt-2">
                <Link to="/" className="btn btn-ghost">Cancel</Link>
                <button type="submit" className="btn btn-neutral" disabled={loading}>
                  {loading && <span className="loading loading-spinner loading-xs" />}
                  {loading ? 'Creating...' : 'Create Note'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
