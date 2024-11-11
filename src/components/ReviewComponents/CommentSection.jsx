import PropTypes from "prop-types";

const CommentSection = ({ value, onChange, className = "" }) => {
  return (
    <section className={`w-full ${className}`}>
      <label htmlFor="additionalComments" className="mt-8 text-2xl text-zinc-800 max-md:ml-1">Additional Comments:</label>
      <textarea
        id="additionalComments"
        value={value}
        onChange={onChange}
        className="flex shrink-0 mt-1.5 w-full rounded-xl bg-[#EBE1DA] h-[215px] shadow-[inset_-1px_1px_3.2px_#909FA5] p-3 focus:outline-none focus:ring-2 focus:ring-[#7199A7]"
        placeholder="Enter additional comments"
      />
    </section>
  );
};

CommentSection.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CommentSection;
