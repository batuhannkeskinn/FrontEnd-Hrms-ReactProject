import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image ,Icon, Segment} from 'semantic-ui-react'
import JobSeekerService from '../services/JobSeekerService';
export default function JobSeekerDetail() {
  let { id } = useParams();
  const colors = [
    "black"
  ]
  const [jobSeeker, setJobSeeker] = useState({})
    useEffect(() => {
        let jobSeekerService = new JobSeekerService()
        jobSeekerService.getByJobSeekerId(id ).then(result => setJobSeeker(result.data.data))
        
    }, [])

  return (
    <div>
      {colors.map((color)=> (
      <Card.Group color={color} key ={color} inverted>
      <Card fluid  color={color} key ={color} inverted>
        <Card.Content>
          <Segment>
          
            
            
            <img src='https://lh3.googleusercontent.com/jbrJajkOF9s5soTLOqQ3zPER8036O53QhVNJc_rofuek9t8-vCdj-rIuaM0GVlGYFMppejI=s85'></img>
          </Segment>
          <Card.Header floated = "center" >{jobSeeker.firstName}</Card.Header>
          <Card.Meta floated = "center">{jobSeeker.email}</Card.Meta>
          <Card.Description>
            {jobSeeker.birthOfYear}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green' >
            <Icon name='hand point right outline' /> Bağlantı Kur
            </Button>
            
          </div>
        </Card.Content>
      
      </Card>
      
    </Card.Group>))}</div>
  )
}
