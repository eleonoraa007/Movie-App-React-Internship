import styled from "styled-components";

const NavStyle = styled.nav`
  display: flex;
  justify-content: flex-start;
  height: 10vh;
  background-color: var(--navbar-bg-color);
  position: relative;
`;

type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

const NavBar = ({children}: ChildrenProps) => {
    return (
        <NavStyle>
            {children}
        </NavStyle>
    );
} 
export default NavBar;