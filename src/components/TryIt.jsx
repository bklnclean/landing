import React from 'react'
import { Container } from 'react-bootstrap'
import GetInTouchForm from './GetInTouchForm'

function TryIt() {
  return (
    <section id="try-it">
        <Container>
                <div className="row">
                    <div className="col-md-7">
                        <GetInTouchForm/>
                    </div>
                    <div className="col-md-5">
                        <h4>Please </h4>
                    </div>
                </div>
        </Container>
    </section>
  )
}

export default TryIt