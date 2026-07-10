import "./SearchBar.css";

function SearchBar({ searchText, setSearchText }) {

  return (

    <div className="search-box">

      <input
        placeholder="Search Medicine..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

    </div>

  );

}

export default SearchBar;