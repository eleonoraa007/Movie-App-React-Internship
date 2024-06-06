import { createPortal } from "react-dom";

type OpenDetailChildrenProps = {
    children?: JSX.Element | JSX.Element[];
    onClose: any;
    selectedId: any;
}

const OpenDetail = (props: OpenDetailChildrenProps) => {
    return createPortal (

        <div className="myModal">
            <div className="modal-content">
                {props.selectedId &&
                    <button className="btn btn-modal" onClick={props.onClose}>&times;</button>
                }
                <div>{props.children}</div>
            </div>
        </div>, document.body

    );
}
export default OpenDetail;
