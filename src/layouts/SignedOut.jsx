import React, { useEffect, useState } from 'react';
import {  Link, NavLink } from 'react-router-dom';
import { Button, Header, Icon, Modal ,Form, Input,Menu} from 'semantic-ui-react'

//= {signIn}
export default function SignedOut({signIn}) {

    // const [email,setEmail]=useState =("");
    // const [password,setPassword]=useState =("");
    const [open, setOpen] = React.useState(false)
    // useEffect(()=>{
    //     if (localStorage.getItem("user-info")){
    //         history.push("/add")
    //     }
    
    
    return (
        <div >
            
                
                  


          <Menu.Item>
            <button className='loginn'  onClick={signIn} style = {{marginRight:"1em"}}>
                <Icon name='sign in' />
                
            
                Giriş Yap
            </button>
            <button className='loginn' onClick={() => setOpen(true)}  >Kayıt Yap
            <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      
    >
      <Header icon>
        <Icon name='building'  style = {{marginLeft:"10em",marginTop:"-100px"}}></Icon>
        
        <Icon name='user' Kayıt Ol style = {{marginLeft:"-6em", marginTop:"-45px"}} ></Icon>
      </Header>
      
      <Modal.Actions>
        <button className='loginn'style = {{Left:"4px"}}  as={NavLink} to="/login" onClick={() => setOpen(false)}>
          <Icon name='remove' /> Kayıt Ol
        </button>
        <button className='loginn' style = {{marginLeft:"20em"}} as={NavLink} to="/login">
          <Icon name='plus' /> Kayıt Ol
        </button>
      </Modal.Actions>
    </Modal>
            </button>
           </Menu.Item>
        </div>
    );
}


