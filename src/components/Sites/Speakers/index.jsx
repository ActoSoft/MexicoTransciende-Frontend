import React, { useState } from 'react'
import styles from './styles.module.scss'

/**
 * SpeakerCard displays information about the speaker :p
 *
 * @param {Object} props
 * @param {string} props.name
 * @param {string} props.avatar
 * @param {string} props.bio
 */
const SpeakerCard = ({ name, avatar, bio, ...props }) => {
    const [state, setState] = useState('normal')

    const handleClick = () => {
        if(state === 'normal') {
            setState('focus')
        } else if(state === 'focus') {
            setState('opened')
        } else if(state === 'opened') {
            setState('normal')
        }
    }

    return(
        <div {...props}
            className={[styles.SpeakerCard, styles[state]].join(' ')}
            onClick={handleClick} >
            <div className={styles.focusArea} >
                <div className={styles.imgCont} >
                    <img src={avatar} />
                </div>
                <p className={styles.name} >
                    {name}
                </p>
            </div>
            <p className={styles.bio} >
                {bio ? bio.slice(0, 100) + '...' : bio}
            </p>
        </div>
    )
}

const Speakers = () => {
    const speakers = [
        {
            name: 'Jon Snow',
            avatar: 'https://a.wattpad.com/useravatar/-SoyJonSnow.128.365882.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        },
        {
            name: 'Daenerys Targaryen',
            avatar: 'https://pm1.narvii.com/6530/775655e773f98ea65abcfbe950e430b1ddf2d71a_128.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        },
        {
            name: 'Sansa Stark',
            avatar: 'https://pm1.narvii.com/6321/c6486761e2c974c3db75874955007b87a2487a6f_128.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        },
        {
            name: 'Arya Stark',
            avatar: 'https://pm1.narvii.com/6594/2ac91d90cdcb2e98b8211f025b7c71ceb3c6d481_128.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        },
        {
            name: 'Cersei Lannister',
            avatar: 'https://pm1.narvii.com/6529/861e36605351a34d9ffdde987aa64ff9b22d1cf3_128.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        },
        {
            name: 'Jaime Lannister',
            avatar: 'https://pm1.narvii.com/6688/6a0f013b07eb920c47e05d0431624d2e2c6cfcd4_128.jpg',
            bio: 'Lorem ipsum dolor amet butcher meggings humblebrag green juice umami leggings paleo iPhone seitan marfa man braid mlkshk you probably havent heard of them pug stumptown. '
        }
    ]

    return(
        <div className={styles.Speakers} >
            <div className={styles.header} >
                <img src="http://www.ihsig.com/media-intestinal-health-ihsig/ihsig767-1200x1200mm-1024x505.png" />
            </div>

            {
                speakers.map((speaker, i) =>
                    <SpeakerCard key={i} {...speaker} />
                )
            }
        </div>
    )
}

export default Speakers
export { SpeakerCard }