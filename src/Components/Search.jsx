//Hooks
import { useRef } from "react";

const Search = (props) => {
  const inputRef = useRef();
  const sendInput = () => {
    props.sendValue(inputRef.current.value);
    inputRef.current.value = "";
  };

  return (
    <div className="h-16 w-[730px] bg-[#1e2a47] flex items-center mb-5 justify-between rounded-2xl">
      <div className="flex items-center h-full">
        <img className="ml-9" src="Images/icon-search.svg" alt="" />
        <input
          ref={inputRef}
          className="ml-5 h-full w-[500px] text-lg bg-[#1e2a47] text-white focus:outline-none placeholder:text-white placeholder:opacity-60"
          type="text"
          placeholder="Search Github username..."
        />
      </div>
      <button
        onClick={sendInput}
        className="h-12 w-24 bg-blue-600 rounded-xl flex items-center justify-center text-white text-base mr-2 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
