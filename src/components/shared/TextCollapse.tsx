type CollapseProps = {
    collapsedNumOfWords: any,
    expanded?: boolean,
    children?: string,
} 

const TextCollapse = ({collapsedNumOfWords = 10, expanded = false, children}: CollapseProps) => {

    const text = children?.split(" ").slice(0, collapsedNumOfWords).join(" ") + "...";

    return (
        <span>
            <span>{text}</span>
        </span>
    );
    
}
export default TextCollapse;