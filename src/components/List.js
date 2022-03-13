import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function List() {
    const cars = ["benz", "prado", "mazda", "subaru"];
    const [show, setShow] = useState(false);
    const [del, setDel] = useState(false);
    const [pub, setPub] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleDel = () => setDel(true);
    const handleDelClose = () => setDel(false);
    const handlePub = () => setPub(true);
    const handlePubClose = () => setPub(false);
    const handleEdit = () => setEdit(true);
    const handleEditClose = () => setEdit(false);

    function handleSubmit(e) {
        e.preventDefault();
        console.log("you ");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <Modal>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal here heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>i am trying</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">close</Button>
                    </Modal.Footer>
                </Modal> */}
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Add Cars</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you wish to add another car!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={del}
                    onHide={handleDelClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Cars</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you wish to delete a car!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleDelClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleDelClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={pub}
                    onHide={handlePubClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Publish Cars</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you wish to publish!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handlePubClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handlePubClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Modal
                    show={edit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Cars</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Do you wish to edit a car!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleEditClose}>
                            Close
                        </Button>
                        <Button variant="warning" onClick={handleEditClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
                <h1>react app</h1>

                <table>
                    <thead>
                        <tr>
                            <th>car</th>
                            <th>add</th>
                            <th>remove</th>
                            <th>publish</th>
                            <th>edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car, i) => {
                            return (
                                <tr key={i}>
                                    <td>{car}</td>
                                    <td>
                                        <Button
                                            variant="success"
                                            onClick={handleShow}
                                        >
                                            add
                                        </Button>
                                    </td>
                                    <td>
                                        {" "}
                                        <Button
                                            variant="danger"
                                            onClick={handleDel}
                                        >
                                            remove
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            onClick={handlePub}
                                        >
                                            publish
                                        </Button>
                                    </td>
                                    <td>
                                        <Button
                                            variant="info"
                                            onClick={handleEdit}
                                        >
                                            edit
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </form>
        </div>
    );
}

export default List;
