import { useContext } from "react";
import { PropContext, PropContextProps } from "../context/PropContext";

type ChildrenProps = {
    children?: JSX.Element|JSX.Element[];
}

const Main = ({children} : ChildrenProps) => {
    const {selectedId} = useContext(PropContext) as PropContextProps;
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