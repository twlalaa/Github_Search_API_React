import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center mb-6 w-[730px]">
      <div className="text-2xl text-white">
        DEVFinder <br />
        <p id="byline" className="text-xs font-normal opacity-5">
          by
          <a
            href="https://github.com/hsynmrzyv"
            target="_blank"
            className="text-white"
          >
            twlalaa
          </a>
        </p>
      </div>
    </header>
  );
};

export default Header;
