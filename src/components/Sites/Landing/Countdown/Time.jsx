import React from 'react'
import '../index.scss'
const Time = ({ time, label }) =>
    <div className = 'time-containers'>
        <div className = 'single-container'>
            <Single value = { time > 9 ? time.toString()[0] : '0' } />
            <Single value = { time > 9 ? time.toString()[1] : time } />
        </div>
        <p>{label}</p>
    </div>

const Single = (props) =>
    <div className = 'single-number'>
        {props.value}
    </div>

export default Time