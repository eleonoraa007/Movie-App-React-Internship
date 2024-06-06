import { useContext } from "react";
import { createPortal } from "react-dom";
import { PropContext, PropContextProps } from "../App";

type OpenDetailChildrenProps = {
    children?: JSX.Element | JSX.Element[];
}

const OpenDetail = (props: OpenDetailChildrenProps) => {
    const {onClose, selectedId} = useContext(PropContext) as PropContextProps;
    return createPortal (

        <div className="myModal">
            <div className="modal-content">
                {selectedId &&
                    <button className="btn btn-modal" onClick={onClose}>&times;</button>
                }
                <div>{props.children}</div>
            </div>
        </div>, document.body

    );
}
export default OpenDetail;
