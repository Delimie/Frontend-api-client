import { Loader } from "lucide-react";

function Button({ isSubmitting, Label }) {
  return (
    <div className="flex justify-center mt-4">
      <button
        disabled={isSubmitting}
        className="bg-rose-400 text-white p-1 px-2 rounded-md
         hover:bg-rose-700 duration-200 cursor-pointer hover:scale-105"
      >
        {isSubmitting ? (
          <div className="flex gap-2">
            <Loader className="animate-spin" />
            <p>Loading</p>
          </div>
        ) : (
          Label
        )}
      </button>
    </div>
  );
}

export default Button;
