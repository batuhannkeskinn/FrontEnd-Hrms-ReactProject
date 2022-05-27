import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import JobSeekerService from '../services/JobSeekerService'
import { Header, Image, Table,Button,Icon } from 'semantic-ui-react'

export default function JobSeekerList() {
  const colors =[
    
    'grey'
  ]
    const [jobSeekers, setJobSeekers] = useState([])
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getJobSeeker().then(result => setJobSeekers(result.data.data))

    }, [])



    return (
        <div >
          {colors.map((color) =>(
<Table color={color} key={color} inverted>
<Table.Body >
  { 
    jobSeekers.map(jobSeeker => (
      <Table.Row >
        <Table.Cell >
          <Header as='h4' image color="yellow" >
            <Image src='https://lh3.googleusercontent.com/jbrJajkOF9s5soTLOqQ3zPER8036O53QhVNJc_rofuek9t8-vCdj-rIuaM0GVlGYFMppejI=s85' rounded size='mini' />
            <Header.Content>
              <Table.Cell >{ jobSeeker.firstName}  {jobSeeker.lastName}</Table.Cell> 
              <Table.Cell >{ jobSeeker.email}</Table.Cell>
              <Table.Cell >{ jobSeeker.birthOfYear}</Table.Cell>

            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell >
          <Link to={`/jobSeeker/${jobSeeker.id}`}>
            <Button color='green' >
              <Icon name='hand point right outline' /> Bağlantı Kur
            </Button>
          </Link>
        </Table.Cell>
            
      </Table.Row>))}
      
      
      
    </Table.Body>
    </Table>
))}
              </div >
      )
      }
