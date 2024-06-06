type WindowProps = {
    children?: JSX.Element | JSX.Element[];
    text: string;
}


const Window = (props: WindowProps) => {
    return (
        <div className="window">
            <h2>{props.text}</h2>
            {props.children}
        </div>
    );
}
export default Window;