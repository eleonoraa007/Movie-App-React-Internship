type WindowProps = {
    children?: JSX.Element | JSX.Element[];
    text: string;
}
const Window = ({children, text}: WindowProps) => {
    return (
        <div className="window">
            <h2>{text}</h2>
            {children}
        </div>
    );
}
export default Window;