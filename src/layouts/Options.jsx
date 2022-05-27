import React from 'react'

import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'
export default function Options() {

    const { optionsItems } = useSelector(state => state.option)
    return (
        <div>
            <Dropdown item text='Ayarlar'>
            <Dropdown.Menu>{optionsItems.map((optionsItems) =>
            (<Dropdown.Item>
                {optionsItems.jobSeeker.JobSeekerName}
            </Dropdown.Item>))

            }

                <Dropdown.Item>Bağlantıların</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={NavLink} to="/options">Davetler</Dropdown.Item>
                <Dropdown.Divider />
                
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}
