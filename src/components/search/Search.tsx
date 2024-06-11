import { useContext } from "react";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const StyledSearch = styled.input`
margin-top: 12px;
  margin-left: 30px;
  height: 5.5vh;
  width: 40vh;
  text-align: start;
  padding-left: 20px;
  border: 1px solid;
  border-radius: 20px;
  border-color: var(--border);

  background-image: url(https://cdn2.hubspot.net/hubfs/4004166/bioticresearch_website_assets/images/search_icon.png);
  background-repeat: no-repeat;
  background-position: right center;
  background-position-x: 15.3rem;
  background-size: 30px;
`;

const Search = () => {
  const {query, onQueryChange} = useContext(PropContext) as PropContextProps;
  return (
      <StyledSearch type="text" placeholder="Search for a movie..."
      value={query} onChange={onQueryChange} />
  );

}
export default Search;


