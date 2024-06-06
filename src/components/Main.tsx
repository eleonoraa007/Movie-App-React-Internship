type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
    selectedId: any;
}

const Main = ({children, selectedId} : ChildrenProps) => {
    return (
        <main style={selectedId ? styles.Active : styles.Inactive}>{children}</main>
    );
}
const styles = {
    Active: {
        filter: 'blur(20px)',
    },
    Inactive: {
        filter: 'none',
    }
}
export default Main;