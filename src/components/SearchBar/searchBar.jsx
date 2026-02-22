function SearchBar() {
    return (
      <div className="
        w-[600px] 
        bg-white/30 
        backdrop-blur-lg 
        rounded-full 
        shadow-lg 
        flex 
        items-center 
        px-6 
        py-3 
        mb-10
      ">
        <input
          type="text"
          placeholder="Search city..."
          className="
            flex-1 
            bg-transparent 
            outline-none 
            text-sky-900
            placeholder-sky-600
          "
        />
  
        <button className="
          bg-white/40 
          px-4 
          py-2 
          rounded-full 
          text-sky-900
          hover:bg-white/60 
          transition
        ">
          Location
        </button>
      </div>
    );
  }

  
  export default SearchBar;