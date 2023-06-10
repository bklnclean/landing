import React from 'react'
import { Button, Form } from 'react-bootstrap'

function GetInTouchForm() {
    return (
        <Form id="get-in-touch-form">
            <span className='d-none'>Image by <a href="https://www.freepik.com/free-photo/side-view-barista-with-latex-gloves-cleaning-table_7823694.htm#query=cleaning&position=2&from_view=search&track=sph">Freepik</a></span>
            <h3>Get in touch</h3>
            <p>We usually call back within 5 minutes</p>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="enter phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <div className="d-flex" style={{ gap: 20 }}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Type of cleaning</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Prices type</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </Form.Group>
            </div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Additional comments</Form.Label>
                <Form.Control as='textarea' placeholder="your comments" />
            </Form.Group>

            <Button type='submit'>Submit</Button>
        </Form>
    )
}

export default GetInTouchForm