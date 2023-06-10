import React from 'react'
import { Button } from 'react-bootstrap'

function Pricing() {

    const prices = [
        {
            discount: '',
            title: 'Base',
            price: 67,
            priceDesc: '/hour',
            list: [
                'Windows',
                'Floors and Carpets',
                'Bathroom',
                '2 person'
            ],
            gold:false
        },
        {
            discount: '',
            title: 'Monthly',
            price: 400,
            priceDesc: '/monthly',
            list: [
                'Windows',
                'Floors and Carpets',
                'Bathroom',
                '2 person',
                
            ],
            gold:false
        },
        {
            discount: '17%',
            title: 'Yearly',
            price: 3000,
            priceDesc: '/monthly',
            list: [
                'Windows',
                'Floors and Carpets',
                'Bathroom',
                '2 person'
            ],
            gold:true
        }
    ]

    return (
        <section id="pricing">
            <div className="container">
                <h3 className='section-title mb-5'>
                    Price
                </h3>

                <div className="d-flex" style={{gap:20}}>
                    {
                        prices.map((item, index) => {
                            return <div className={'price-item '+(item.gold?'gold':'')}  key={index}>
                                    <h5>{item.title}</h5>
                                    <h4>From</h4>
                                    <h2><span>$</span>{item.price}</h2>
                                    <h4>{item.priceDesc}</h4>
                                    <ul>
                                        {
                                            item.list.map((list_item, list_index) => {
                                                return <li key={list_index}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                                              </svg> {list_item}</li>
                                            })
                                        }
                                    </ul>
                                    <Button className='mt-5' variant='outline-primary'>Get started</Button>
                                </div>
                        })
                    }
                </div>

                <p className='mt-5 text-center'>* prices are not final and depend on the level of pollution. Before making an application for cleaning, please contact our managers to clarify the details and final calculation of the cost of cleaning</p>

            </div>
        </section>
    )
}

export default Pricing