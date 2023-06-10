import React from 'react'
import { Button, Form } from 'react-bootstrap'
import NewYorkPhoneMask from './NewYorkPhoneMask'

function IndexBannerForm() {

    const submitForm = (e)=>{
        e.preventDefault()
    }

    return (
        <Form onSubmit={(e)=>submitForm(e)} id="index-banner-form">
            <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Name</Form.Label> */}
                <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                {/* <Form.Label>Phone</Form.Label> */}
                <NewYorkPhoneMask/>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className='flex-grow-1'>
                {/* <Form.Label>Type</Form.Label> */}
                <Form.Select aria-label="Default select example">
                    <option>-choose room type-</option>
                    <option value="1">House</option>
                    <option value="2">Office</option>
                    <option value="3">Warehouse</option>
                </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Get a consultation
            </Button>

        </Form>
    )
}

export default IndexBannerForm