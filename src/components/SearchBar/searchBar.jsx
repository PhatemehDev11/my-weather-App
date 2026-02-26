function SearchBar({ setCity, query, setQuery, getUserLocation }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
      w-[90%] 
      md:w-[600px] 
      bg-white/30 
      backdrop-blur-lg 
      rounded-full 
      shadow-lg 
      flex 
      items-center 
      px-4 
      py-3 
      mb-10
      "
    >
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCity(query);
          }
        }}
        placeholder="Search city..."
        className="
          flex-1 
          bg-transparent 
          outline-none 
          text-sky-900
          placeholder-sky-600
        "
      />

      <button
        type="button"
        onClick={getUserLocation}
        className="
          bg-white/40 
          px-4 
          py-2 
          rounded-full 
          text-sky-900
          hover:bg-white/60 
          transition
        "
      >

        Location

      </button>
    </form>
  );
}

export default SearchBar;