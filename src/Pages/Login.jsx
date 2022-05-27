import React from 'react'
import { NavLink } from 'react-router-dom'
import { Form, Input, TextArea, Button, Select, Modal, Icon } from 'semantic-ui-react'

export default function Loginn() {
  const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
  ]
  return (
    <div>
      <Form>

    <Form.Group widths='equal'>
      <Form.Field
        id='form-input-control-first-name'
        control={Input}
        label='Ad'
        placeholder='Ad'

      />

      
      <Form.Field       
        id='form-input-control-last-name'
        control={Input}
        label='Soy Ad'
        placeholder='Soy Ad' 
        
      />
      <Form.Field color="red"
        id='form-input-control-first-name'
        control={Input}
        label='Telefon Numarası'
        placeholder='örn. 538 '
        />
        <Form.Field color="red"
        id='form-input-control-first-name'
        control={Input}
        label='Şifre'
        placeholder='***** '
       
        />
    </Form.Group>
    
    
    
  </Form>
 

  <Modal.Actions>
        <Button  color='red'>
          <Icon name='remove' />
          Vazgeç
        </Button>
        
          
      

          
        <Button color='green'  as={NavLink} to="/employer">
          <Icon name='checkmark' /> Kayıt Ol</Button></Modal.Actions>
    </div>
  )
}
