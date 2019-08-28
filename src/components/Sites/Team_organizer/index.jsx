import React from 'react'
import styles from './styles.module.scss'

/**
 * Team organizer displays information about the organizer :p
 *
 * @param {Object} props
 * @param {string} props.avatar
 * @param {string} props.name
 * @param {string} props.gender
 * @param {string} props.bio
 */
const OrganizerCard = ({ avatar, name, gender, bio, ...props }) => {
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
            <p className = { styles.cardGender } >
                { gender === 'male' ? 'Organizador' : 'Organizadora' }
            </p>
            <p className = { styles.cardBio } >
                {bio}
            </p>
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
            avatar: 'https://pm1.narvii.com/6594/2ac91d90cdcb2e98b8211f025b7c71ceb3c6d481_128.jpg',
            name: 'Karla Pérez',
            gender: 'female',
            bio: 'Ing. en Gestión Empresarial'
        },
        {
            avatar: 'https://pm1.narvii.com/6688/6a0f013b07eb920c47e05d0431624d2e2c6cfcd4_128.jpg',
            name: 'Juan Salas',
            gender: 'male',
            bio: 'Ing. en Sistemas Comp.'
        },
        {
            avatar: 'https://a.wattpad.com/useravatar/-SoyJonSnow.128.365882.jpg',
            name: 'Diego Jimenez',
            gender: 'male',
            bio: 'Ing. en Sistemas Comp.'
        },
        {
            avatar: 'https://pm1.narvii.com/6530/775655e773f98ea65abcfbe950e430b1ddf2d71a_128.jpg',
            name: 'José Sánchez',
            gender: 'male',
            bio: 'Ing. en Sistemas Comp.'
        },
        {
            avatar: 'https://pm1.narvii.com/6529/861e36605351a34d9ffdde987aa64ff9b22d1cf3_128.jpg',
            name: 'Karla Pérez',
            gender: 'female',
            bio: 'Ing. en Gestión Empresarial'
        },
        {
            avatar: 'https://pm1.narvii.com/6594/2ac91d90cdcb2e98b8211f025b7c71ceb3c6d481_128.jpg',
            name: 'Karla Pérez',
            gender: 'female',
            bio: 'Ing. en Gestión Empresarial'
        }
    ]

    return(
        <div className = { styles.TeamOrganizer } >
            <div className = { styles.header } >
                <img src = 'http://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png' />
            </div>

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