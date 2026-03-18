import { PlusIcon } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 border-b border-base-300 sticky top-0 z-50">
      <div className="navbar-start">
        <Link to="/" className="flex items-center gap-2 ml-4 no-underline">
          <div className="bg-neutral text-neutral-content rounded-lg w-8 h-8 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3h10v1.5H3V3zm0 3h10v1.5H3V6zm0 3h7v1.5H3V9z" fill="currentColor"/>
            </svg>
          </div>
          <span className="font-display text-2xl text-base-content">ThinkBoard</span>
        </Link>
      </div>
      <div className="navbar-end mr-4">
        <Link to="/create" className="btn btn-neutral btn-sm gap-2">
          <PlusIcon size={15} />
          New Note
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
