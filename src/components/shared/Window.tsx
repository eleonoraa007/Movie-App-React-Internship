import styled from "styled-components";

const WindowStyle = styled.div`
    background-color: var(--background-color);
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    gap: 16px;
`;

const TextStyle = styled.h2`
  margin: 2rem 0rem 1rem 2rem;
`;

type WindowProps = {
    children?: JSX.Element | JSX.Element[];
    text: string;
}
const Window = ({children, text}: WindowProps) => {
    return (
        <WindowStyle>
            <TextStyle>{text}</TextStyle>
            {children}
        </WindowStyle>
    );
}
export default Window;