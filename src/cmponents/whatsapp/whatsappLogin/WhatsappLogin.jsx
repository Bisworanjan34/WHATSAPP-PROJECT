import React, { useContext } from 'react'
import { Button,Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { WhatsappLoginContext } from './whatsappLoginContext/WhatsappLoginContext'
const WhatsappLogin = () => {
  let {whatsappLogin,setWhatsappLogin}=useContext(WhatsappLoginContext)
  let navigate=useNavigate()
  console.log(whatsappLogin)
  return (
    <div className='bg-light pt-5 min-vh-100'>
        {/* <Navbar bgcolor={'green'} textcolor={'white'}/> */}
       <div className="login-form shadow w-50 h-50 p-5 mx-auto bg-warning border border-info">
        <div className="form-div w-50 m-auto p-2">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className='w-100 ' />
        <Form.Text className="text-muted ">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className='w-100 '/>
      </Form.Group>
      <Form.Group className="mb-3 w-75 " controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button  type="button" 
      onClick={()=>{
      setWhatsappLogin(true)
       navigate('/')
        }}>
        Log-in
      </Button>
    </Form>
   
    </div>
    </div>
    </div>
  )
}

export default WhatsappLogin
