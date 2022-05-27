import React from 'react'
import { Modal } from 'semantic-ui-react';
import * as Yup from "yup";
import HrmsTextInput from '../utilities/customFormControls/HrmsTextInput';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, FormField,Label } from 'semantic-ui-react';

export default function Register() {
    const initialValues = {userName:"" , email:"",password:"" }
    const schema =Yup.object({
        userName: Yup.string().required("Adını lütfen bizimle paylaş."),
        email:Yup.string().required("Sana Ulaşabilmemiz İçin E-Posta Adresine İhtiyacımız Var."),
        password:Yup.string().required("Şifreni Lütfen Gir.")

    })
  return (
      
    <div>
        <Formik>
                
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={(values)=>{
                    console.log(values)
                }}
            
            <Form className="ui form">
                <HrmsTextInput name = "userName" placeholder = "İsim"></HrmsTextInput>
                <HrmsTextInput name = "password" placeholder = "Şifre"></HrmsTextInput>
                <HrmsTextInput name = "email" placeholder = "E-Posta"></HrmsTextInput>
                <Button color="green" type="submit">Ekle</Button>
            </Form>
            </Formik>
    </div>
    
  )
}
