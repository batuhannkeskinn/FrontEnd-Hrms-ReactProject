import React, { useState } from 'react'
import {  NavLink } from 'react-router-dom';

import {  useNavigate } from 'react-router-dom'
import { Container, Menu ,Dropdown, Button} from 'semantic-ui-react'
import Options from './Options'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
export default function
  Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const history = useNavigate()
  function handleSignOut(){
  setIsAuthenticated(false)
    history("/")
  }
  function handleSignIn(){
    setIsAuthenticated(true)
    
    }
  return (
    <div>
      <Menu inverted fixed='top' color='black'>
        <Container>
          <Menu.Item>
            <Dropdown text='İlanlar'>
            <Dropdown.Menu>
               <Dropdown.Item> <Button color = "clay" as={NavLink} to = "/jobSeeker">İş Arayanlar</Button> </Dropdown.Item>
               <Dropdown.Item> <Button color = "black" as={NavLink} to = "/employer">Şirketler</Button></Dropdown.Item>

            </Dropdown.Menu>
           </Dropdown>
            
          </Menu.Item>
          

          
          <Menu.Item name='messages'/>
            

          

          <Menu.Menu position='right'>
            { isAuthenticated? <SignedIn signOut={handleSignOut} bisey="1"/> 
            :<SignedOut signIn={handleSignIn}/>}

          </Menu.Menu>
        </Container>


      </Menu>
    </div>
  )
}
