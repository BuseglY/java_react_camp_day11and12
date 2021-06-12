import React from 'react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import JobPosition from './JobPosition'
import Navi from './Navi'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import JobAdvertisementDetail from '../pages/JobAdvertisementDetail'
import JobSeekerDetail from '../pages/JobSeekerDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <JobPosition />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path='/' component={JobAdvertisementList}/>
                        <Route exact path='/jobAdvertisements' component={JobAdvertisementList}/>
                        <Route path='/jobAdvertisements/:companyName' component={JobAdvertisementDetail}/>
                        <Route path='/jobSeeker' component={JobSeekerDetail}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}
