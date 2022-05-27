import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Table, Button,Image, Header, } from 'semantic-ui-react'
import EmployerService from '../services/EmployerService'

export default function EmployerList() {
    const[employers,setEmployer] = useState([])
    useEffect(() =>{
        let employerService = new EmployerService()
        employerService.getEmployer().then(result => setEmployer(result.data.data))
    },[])
  return (
    <div><Table >
    <Table.Header>
        
        <Table.Row >
           

            <Table.HeaderCell><Icon name= "plus"></Icon> Şirket Adı</Table.HeaderCell>
            <Table.HeaderCell>E-Posta</Table.HeaderCell>
           
         
            


        </Table.Row>
    </Table.Header>


    <Table.Body>

        {
            employers.map(employer => (
                <Table.Row >
                    <Table.Cell >
                        <Header as='h4' image>
                            
                            <Header.Content>
                                <Table.Cell >{ employer.companyName}</Table.Cell>
                                <Table.Cell >{ employer.email}</Table.Cell>
                                <Table.Cell >{ employer.url}</Table.Cell>
                            </Header.Content>
                        </Header>
                    </Table.Cell>
                    <Table.Cell >
                        <Link to={`/employer/${employer.id}`}>
                            <Button color='green' >
                                <Icon name='hand point right outline' /> Bağlantı Kur
                            </Button>
                        </Link>
                    </Table.Cell>
                </Table.Row>
            ))
        }
    </Table.Body>
    </Table>
    </div>
    )
}

               
