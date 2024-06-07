import { useContext } from "react";
import { PropContext, PropContextProps } from "../context/PropContext";

const Search = () => {
  const {query, onQueryChange} = useContext(PropContext) as PropContextProps;
  return (
    <div>
      <input className="search" type="text" placeholder="Search for a movie..."
      value={query} onChange={onQueryChange} />
    </div>
  );

}
export default Search;


