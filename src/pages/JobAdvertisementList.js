import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService'

export default function JobAdvertisementList() {

    const [jobAdvertisements, setJobAdvertisements] = useState([])
    useEffect(()=>{
        let jobAdvertisementService=new JobAdvertisementService()
        jobAdvertisementService.getJobAdvertisement().then(result=>setJobAdvertisements(result.data.data))
    },[])

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Pozisyon Adı</Table.HeaderCell>
                        <Table.HeaderCell>İş Açıklaması</Table.HeaderCell>
                        <Table.HeaderCell>Şehir Bilgisi</Table.HeaderCell>
                        <Table.HeaderCell>Açık Pozisyon Sayısı</Table.HeaderCell>
                        <Table.HeaderCell>Yayın Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Son Başvuru Tarihi</Table.HeaderCell>
                        <Table.HeaderCell>Şirket İsmi</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        jobAdvertisements.map(jobAdvertisements => (
                            <Table.Row key={jobAdvertisements.id}>
                                <Table.Cell><Link to={`/jobAdvertisements/${jobAdvertisements.companyName}`}>{jobAdvertisements.jobPositionName}</Link></Table.Cell>
                                <Table.Cell>{jobAdvertisements.jobDescription}</Table.Cell>
                                <Table.Cell>{jobAdvertisements.cityInfo}</Table.Cell>
                                <Table.Cell>{jobAdvertisements.numberOfOpenPosition}</Table.Cell>
                                <Table.Cell>{jobAdvertisements.publicationDate}</Table.Cell>
                                <Table.Cell>{jobAdvertisements.applicationDeadline}</Table.Cell>
                                <Table.Cell>{jobAdvertisements.employer.companyName}</Table.Cell>
                            </Table.Row>
                        ))
                    }

                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}
