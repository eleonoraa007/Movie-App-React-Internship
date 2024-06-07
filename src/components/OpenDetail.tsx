import { useContext } from "react";
import { createPortal } from "react-dom";
import { PropContext, PropContextProps } from "../context/PropContext";

type OpenDetailChildrenProps = {
    children?: JSX.Element | JSX.Element[];
}

const OpenDetail = ({children}: OpenDetailChildrenProps) => {
    const {onClose, selectedId} = useContext(PropContext) as PropContextProps;
    return createPortal (

        <div className="myModal">
            <div className="modal-content">
                {selectedId &&
                    <button className="btn btn-modal" onClick={onClose}>&times;</button>
                }
                <div>{children}</div>
            </div>
        </div>, document.body

    );
}
export default OpenDetail;
