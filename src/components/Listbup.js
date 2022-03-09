import React, { useState } from "react";
//import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function List() {
    const cars = ["benz", "prado", "mazda", "subaru"];
    // const [texts, setTexts] = useState(cars);
    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log("you ");
    // }
    //const add = () => setTexts([...texts, cars]);

    return (
        <div>
            <form>
                {/* <Modal>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal here heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>i am trying</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary">close</Button>
                    </Modal.Footer>
                </Modal> */}
                <h1>react app</h1>
                {/* <label htmlFor="cartype">cartype</label>
                <input cartype />
                <button type="submit" onClick={add}>
                    submit
                </button> */}
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
                                        <button>add</button>
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
