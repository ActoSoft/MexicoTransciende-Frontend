import React from 'react'
import styles from './styles.module.scss'
import organizer1 from '../../../images/organizer_1.jpg'
import organizer2 from '../../../images/organizer_2.jpg'
import organizer3 from '../../../images/organizer_3.jpg'
import organizer4 from '../../../images/organizer_4.jpg'
import organizer5 from '../../../images/organizer_5.jpg'
import organizer6 from '../../../images/organizer_6.jpg'
import organizer7 from '../../../images/organizer_7.jpg'
import organizer8 from '../../../images/organizer_8.jpg'
import organizer9 from '../../../images/organizer_9.jpg'
import organizer10 from '../../../images/organizer_10.jpg'
import organizer11 from '../../../images/organizer_11.jpg'
import organizer12 from '../../../images/organizer_12.jpg'
import organizer13 from '../../../images/organizer_13.jpg'
import organizer14 from '../../../images/organizer_14.jpg'
import organizer15 from '../../../images/organizer_15.jpg'
import organizer16 from '../../../images/organizer_16.jpg'
import { ReactComponent as Instagram } from '../../../images/icons/instagram.svg'

/**
 * Team organizer displays information about the organizer :p
 *
 * @param {Object} props
 * @param {string} props.avatar
 * @param {string} props.name
 * @param {string} props.role
 * @param {string} props.bio
 */
const OrganizerCard = ({ avatar, name, role, bio, ...props }) => {
    return(
        <div { ...props }
            className = { [ styles.OrganizerCard ] }
        >
            <div className = { styles.cardImgCont } >
                <img src = { avatar } />
            </div>
            <p className = { styles.cardName } >
                {name}
            </p>
            <p className = { styles.cardRole } >
                { role }
            </p>
            <a href = { `https://instagram.com/${bio.split('@')[1]}` }>
                <div className = { styles.instagram }>
                    <Instagram className = { styles.instagramIcon } />
                    <p className = { styles.cardBio } >
                        {bio}
                    </p>
                </div>
            </a>
        </div>
    )
}

const OrganizerColumn = ({ ...organizer }) => {
    return(
        <div className = { [styles.colL3, styles.colM3, styles.colS4, styles.colXS6, styles.centerContent].join(' ') }>
            <OrganizerCard
                { ...organizer }
            />
        </div>
    )
}

const Organizers = () => {
    const organizers = [
        {
            avatar: organizer1,
            name: 'Juan Pablo Sánchez Delgadillo',
            role: 'Coordinador General',
            bio: '@juanpsd'
        },
        {
            avatar: organizer2,
            name: 'Luis Felipe Islas Islas',
            role: 'Coordinador logística y equipo',
            bio: '@filip233'
        },
        {
            avatar: organizer3,
            name: 'Raúl Briseño Lavalley',
            role: 'Coordinador de Escenario / Vicecoordinador general',
            bio: '@_rulobr'
        },
        {
            avatar: organizer4,
            name: 'Rosa Eugenia Sandoval Cortés',
            role: 'Vicecoordinadora de escenario',
            bio: '@rosa_sandovall'
        },
        {
            avatar: organizer5,
            name: 'Karla Mijangos Blancas',
            role: 'Coordinadora de patrocinios',
            bio: '@karlamijangosb'
        },
        {
            avatar: organizer6,
            name: 'Darsha Justine Ascencio Islas',
            role: 'Vicecoordinadora de patrocinios',
            bio: '@darsh.asc'
        },
        {
            avatar: organizer7,
            name: 'Viviana Luna Jiménez Machuca',
            role: 'Coordinadora de Conferencias',
            bio: '@vivianlunaj'
        },
        {
            avatar: organizer8,
            name: 'Ana Karina Moreno Martínez',
            role: 'Vicecoordinadora de conferencias',
            bio: '@anakarinamomtz'
        },
        {
            avatar: organizer9,
            name: 'Silvia Paola Barrera Pérez',
            role: 'Coordinadora de Talleres y Masterclass',
            bio: '@paobarrera65'
        },
        {
            avatar: organizer10,
            name: 'Daniel Arrieta Moreno',
            role: 'Vicecoordinador de Talleres y Masterclass',
            bio: '@daniel139904'
        },
        {
            avatar: organizer11,
            name: 'María Fernanda Covarrubias Ramírez',
            role: 'Coordinador de ventas',
            bio: '@fer_cova'
        },
        {
            avatar: organizer12,
            name: 'Homero Adrián Pérez Pérez',
            role: 'Vicecoordinador de Ventas',
            bio: '@homeroadrianp'
        },
        {
            avatar: organizer13,
            name: 'Mara Daniela Aguilar Orea',
            role: 'Coordinadora de Imagen',
            bio: '@maradanielaaa'
        },
        {
            avatar: organizer14,
            name: 'Daniela Ortega Miranda',
            role: 'Vicecoordinadora de Imagen',
            bio: '@danielaom_18'
        },
        {
            avatar: organizer15,
            name: 'Dafne Abigail Carranza Maldonado',
            role: 'Coordinadora de Finanzas',
            bio: '@dafnecarranza'
        },
        {
            avatar: organizer16,
            name: 'Carlos Uriel Santillan Mimila',
            role: 'Vicecoordinador de Finanzas',
            bio: '@charly_10119'
        }
    ]

    return(
        <div className = { styles.TeamOrganizer } >
            <div className = { styles.TeamContainer }>
                <div className = { styles.titleContainer }>
                    <h3>EQUIPO ORGANIZADOR</h3>
                </div>
            </div>

            <div className = { [styles.organizerContL, styles.organizerContM, styles.organizerContS, styles.organizerContXS].join(' ') }>
                <div className = { styles.Row }>
                    {
                        organizers.map((organizer, i) =>
                            <OrganizerColumn
                                key = { i }
                                { ...organizer }
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Organizers
export { OrganizerCard }