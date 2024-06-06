interface SearchProps {
  value: any;
  onQueryChange: any;
} 

const Search = ({value, onQueryChange}: SearchProps) => {
  return (
    <div>
      <input className="search" type="text" placeholder="Search for a movie..."
      value={value} onChange={onQueryChange} />
    </div>
  );

}
export default Search;

