import React , { useState,useEffect } from 'react'
import { Input, Label, Menu } from 'semantic-ui-react'
import JobPositionService from '../services/jobPositionService'

export default function JobPosition() {

    const [jobPositions, setJobPositions] = useState([])
    useEffect(()=>{
        let jobPositionService=new JobPositionService()
        jobPositionService.getJobPosition().then(result=>setJobPositions(result.data.data))
    },[])


    return (
        <div>
            <Menu size='large' vertical>
                <Menu.Item name='positionName'>
                <Label color='teal'>{}</Label>
          {jobPositions.positionName}
        </Menu.Item>
                <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item>
            </Menu>
        </div>
    )
}
