import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";

function UpdateList(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <React.Fragment>
            <Button variante="primary" 
            onClick={(evt)=>{
                handleShow();props.getList(evt,props.elementId);
            }}>
                Update
                </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input 
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={props.singledata.title}
                    onChange={props.handleChange}
                    className="d-block my-3"
                    ></input>
                    <input
                    type="text"
                    placehold="Author"
                    name="author"
                    value={props.singledata.author}
                    onChange={props.handleChange}
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
                        props.updateList(event,props.elementId);
                        }}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </React.Fragment>
    )
}

export default UpdateList;