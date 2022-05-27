import React from 'react'
import { Route, Routes } from 'react-router';
import { Grid } from 'semantic-ui-react';
import Category from "./Category";
import JobSeekerDetail from '../Pages/JobSeekerDetail';
import JobSeekerList from "../Pages/JobSeekerList";
import EmployerDetail from "../Pages/EmployerDetail";
import EmployerList from '../Pages/EmployerList';
import Login from '../Pages/Login';
import Loginn from '../Pages/Login';
import Register from '../Pages/Register';
import CandidateList from '../Pages/CandidateList';
export default function DashBoard() {
    return (
        <div>
            <Grid >
                <Grid.Row>
                    <Grid.Column width={4}>
                        {/* < Category /> */}
                    </Grid.Column>
                    <Grid.Column width={15} >
                        <Routes>
                        <Route exact path='/' element={<JobSeekerList/>}/>
                        <Route exact path='/jobSeeker' element={<JobSeekerList/>}/>
                        <Route path='/jobSeeker/:id' element={<JobSeekerDetail/>}/>
                        <Route exact path='/employer/:id' element={<EmployerDetail/>}/>
                        <Route exact path='/employer' element={<EmployerList/>}/>
                        <Route exact path='/login' element={<Login/>}/>
                        <Route exact path='/register' element={<CandidateList/>}/>

                        </Routes>
                        

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
