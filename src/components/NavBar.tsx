type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

const NavBar = ({children}: ChildrenProps) => {
    return (
        <nav className="nav-bar">
            {children}
        </nav>
    );
} 
export default NavBar;