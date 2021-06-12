import react, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'
export default function JobAdvertisementDetail() {
    let { companyName } = useParams()
    const [jobAdvertisement, setJobAdvertisement] = useState({})
    useEffect(()=>{
        let jobAdvertisementService=new JobAdvertisementService()
        jobAdvertisementService.getByCompanyNameJobAdvertisement(companyName).then(result=>setJobAdvertisement(result.data.data))
    },[]) 
    
    return (
        <div>
           
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <Card.Header>{jobAdvertisement.employer.companyName}</Card.Header>
                        <Card.Meta></Card.Meta>
                        <Card.Description>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    )
}