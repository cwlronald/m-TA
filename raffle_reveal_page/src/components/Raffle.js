import React, { useState } from 'react';
import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Row, Container, Dropdown, Col, NavLink} from "react-bootstrap";
import loading from '../lib/loading.jpg'
import silverprize from '../lib/silverprize.jpg'
import noprize from '../lib/noprize.jpg'


function Raffle(){
    let ticketList=[
        {
            ticket:'Silver', 
            details:{
                prize_name:'snorlax',
                prize_image:silverprize
            }
        },
        {
            ticket:'Gold', 
            details:{
            }
        },
        {
            ticket:'Diamond', 
            details:{
            }
        }
    ]
    let ticketCount=5

    const[ticket,setTicket]=useState('')
    const[ticketDetails,setTicketDetails]=useState({})
    const[tempTicket,setTempTicket]=useState(ticketList[0].ticket)
    const[prizeImage,setPrizeImage]=useState(loading)
    const[showResult,setShowResult]=useState(false)

    
    

    function onSubmit(e){
        e.preventDefault()
        setTicket(tempTicket)
        //post request to backend to check if ticket id is winning ticket
        //delete the ticket from the database
        //if winning ticket, display the infro of the prize accordingly
        //if losing ticket, change to default
        if (tempTicket=='Silver'){
            setPrizeImage(silverprize)
            setTicketDetails(ticketList[0])
            setShowResult('won')
            console.log(ticketDetails)
        } else {
            setPrizeImage(noprize)
            setShowResult('lose')
        }
    }

    function onSubmit2(e){
        e.preventDefault()
        let res = e.target.value
        console.log(res)
        if (res=='Silver'){
            setPrizeImage(silverprize)
            setTicketDetails(ticketList[0])
            setShowResult('won')
            console.log(ticketDetails)
        } else {
            setPrizeImage(noprize)
            setShowResult('lose')
        }
    }


    function change(e){
        setTempTicket(e.target.value);
    }


    return(
        <div>
            <Row className='mt-5' style={{background:'white'}}>
                <Col className='col-3 border rounded'>
                    <Row>Get More Tickets</Row>
                    <Row>
                        {
                            ticketList.map(ticket=>(
                                <Button className='mt-2 mb-2' onClick={onSubmit2} value={ticket.ticket}>{ticket.ticket}</Button>
                            ))
                        }
                    </Row>
                </Col>
                <Col className='col-9 border'>
                    <Row>
                        <img src={prizeImage} alt='loading'/>
                    </Row>
                    <Row>
                        {
                            showResult=='won'?
                            <div className='text-center mt-2 mb-2'>
                                <h3>Congrats!</h3>
                                <p>You won a {ticketDetails.details.prize_name}</p>
                                <Button type='submit'>Redeem Prize</Button>
                            </div>
                            :
                            <>
                                {
                                    showResult=='lose'?
                                    <div className='text-center mt-2 mb-2'>
                                        <h3>Better Luck Next Time!</h3>
                                        <Button type='submit'>Try Again</Button>
                                    </div>
                                    
                                    :
                                    <></>
                                }
                            </>
                        }
                    </Row>
                    <Row className='border-top'>
                        <Row className='mt-2'>
                            <Col className='col-2'>Image</Col>
                            <Col className='col-7'>
                                <h3>Draw Tickets</h3>
                                <p>{ticketCount} Tickets found</p>
                                <p>Open your tickets and get a change to win $1000 worth of high quality NFTs! <a href="#action1">Learn More</a></p>
                            </Col>
                            <Col className='col-3'>
                                <Form onSubmit={onSubmit} className='mt-3'>
                                    <Row>
                                        <Form.Control as="select" onChange={change}>
                                            {ticketList.map((ticket,index)=>(
                                                <option>{ticket.ticket}</option>
                                            ))}
                                        </Form.Control>
                                    </Row>
                                    <Row className='mt-3'>
                                        <Button type='submit'>Draw Ticket</Button>
                                    </Row>
                                </Form>
                            </Col>
                        </Row>
                        
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Raffle 