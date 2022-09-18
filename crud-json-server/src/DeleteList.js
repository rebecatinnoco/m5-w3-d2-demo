import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function DeleteList(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Button 
                variante="primary" 
                onClick={(evt) => {
                    handleShow();
                    props.getList(evt,props.elementId);
                }}>
            Delete
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={props.singledata.title}
                    disable={true}
                    className="d-block my-3"
                    ></input>
                    <input
                    type="text"
                    placehold="Author"
                    name="author"
                    value={props.singledata.author}
                    disable={true}
                    className="d-block my-3">
                    </input>
                </Modal.Body>
                <Modal.Footer>
                    <Button variante="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button 
                    variante="primary" 
                    onClick={(event) => {
                        handleClose();
                        props.deleteList(event,props.elementId);
                        }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default DeleteList;