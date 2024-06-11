import { useContext } from "react";
import { createPortal } from "react-dom";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ContentStyle = styled.div`
  background-color: var(--background-color-primary);
  color: var(--primary-color);
  margin: auto;
  padding: 0px;
  width: 100%;
`;

type OpenDetailChildrenProps = {
    children?: JSX.Element | JSX.Element[];
}

const OpenDetail = ({children}: OpenDetailChildrenProps) => {
    const {onClose, selectedId} = useContext(PropContext) as PropContextProps;
    return createPortal (

        <div className="myModal">
            <ContentStyle>
                {selectedId &&
                    <button className="btn btn-modal" onClick={onClose}>&times;</button>
                }
                <div>{children}</div>
            </ContentStyle>
        </div>, document.body

    );
}
export default OpenDetail;
