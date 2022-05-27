import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { Card, Divider, Image, Button,Icon} from "semantic-ui-react";
import JobSeekerService from "../services/JobSeekerService";

export default function CandidateList() {
  const [jobSeekers, setJobSeekers] = useState([]);

  let jobSeekerService = new JobSeekerService();

  useEffect(() => {
    jobSeekerService.getJobSeeker().then((result) => setJobSeekers(result.data.data));
  }, []);

  return (
    <Card.Group   itemsPerRow="4">

      {jobSeekers.map((jobSeeker) => (        
        <Card raised key={jobSeeker.id}>  
          <Image src='https://lh3.googleusercontent.com/jbrJajkOF9s5soTLOqQ3zPER8036O53QhVNJc_rofuek9t8-vCdj-rIuaM0GVlGYFMppejI=s85' />
          <Card.Content>
            <Card.Header>{jobSeeker.firstName}</Card.Header>
            <Card.Meta>{jobSeeker.email}</Card.Meta>
            <Card.Description>
              {jobSeeker.birthOfYear}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <NavLink to={`/jobSeeker/${jobSeeker.id}`}>
              <Button basic color="green">
                <Icon name="hand point right outline" />
                Bağlantı Kur
              </Button>
            </NavLink>
          </Card.Content>
        </Card>
      ))}
            
    </Card.Group>
);}