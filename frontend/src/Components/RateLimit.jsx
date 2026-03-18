import { ZapIcon } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 pt-6">
      <div role="alert" className="alert alert-warning">
        <ZapIcon size={18} />
        <div>
          <p className="font-semibold">Rate limit reached</p>
          <p className="text-sm">Too many requests — please wait a moment before trying again.</p>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
