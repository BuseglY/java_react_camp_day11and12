import React from 'react'
import { NavLink } from 'react-router-dom'
import {  Dropdown } from 'semantic-ui-react'

export default function JobSeeker() {
    return (
        <div>
             <Dropdown item text='İş Arayanlar'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Buse</Dropdown.Item>
                            <Dropdown.Item>Tuğçe</Dropdown.Item>
                            <Dropdown.Item>Ertuş</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item as={NavLink} to="/jobSeeker">İş Arayanlara Git</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
        </div>
    )
}
