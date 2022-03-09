import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
function List() {
    const cars = ["benz", "prado", "mazda", "subaru"];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
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
                                        <button onClick={handleShow}>
                                            add
                                        </button>
                                    </td>
                                    <td>
                                        {" "}
                                        <button>remove</button>
                                    </td>
                                    <td>
                                        <button>publish</button>
                                    </td>
                                    <td>
                                        <button>edit</button>
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
