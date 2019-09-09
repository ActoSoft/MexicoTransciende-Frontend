import React, { Fragment } from 'react'
import { getAllAssistants } from '../../../../utils/backendEndpoints'
import List from '../../../List'

const columns = [
    { title: 'Nombre', value: 'name' },
    { title: 'Correo', value: 'email' },
    { title: 'Teléfono', value: 'phone' }
]

const Assistants = () =>
    <Fragment>
        <List
            getUrl = { getAllAssistants }
            columns = { columns }
        />
    </Fragment>

export default Assistants