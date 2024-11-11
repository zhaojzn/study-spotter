import PropTypes from "prop-types";  // Import PropTypes

const CommentSection = ({ className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <label
        htmlFor="additionalComments"
        className="mt-8 text-2xl text-zinc-800 max-md:ml-1"
      >
        Additional Comments:
      </label>
      <textarea
        id="additionalComments"
        className="flex shrink-0 mt-1.5 w-full rounded-xl bg-[#EBE1DA] h-[215px] shadow-[inset_-1px_1px_3.2px_#909FA5] p-3 focus:outline-none focus:ring-2 focus:ring-[#7199A7]"
        aria-label="Additional comments"
      />
    </section>
  );
};

// Add PropTypes to validate 'className' prop
CommentSection.propTypes = {
  className: PropTypes.string,  // Define 'className' as a string
};

export default CommentSection;
