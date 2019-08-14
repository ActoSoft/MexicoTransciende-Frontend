import React, { Component } from 'react'
import './App.scss'
import cross from './multiply.svg'
import logo from './logo.png'
import menu from './menu.svg'
import user from './user.svg'

export default class App extends Component {
  constructor( props ){
    super(props)
    this.state = {
      side_active: false
    }
  }

  render(){
    return(
      <div className = {`App ${this.state.side_active ? "right-move" : "left-move"}`}>
        <div className = {`side-bar ${this.state.side_active ? "side-visible" : "side-hidde"}`}>
          <img src = { cross } alt = "" className = "cross"
          onClick = { () => this.setState( ( state ) => ({
            side_active: !state.side_active
          })) }/>
          <ul className = "options-container" >
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Speakers</li>
            <li>Equipo Org.</li>
            <li>Patrocinadores</li>
            <li>Contacto</li>
          </ul>
          <img src = { logo } alt="" className = "logo-sidebar"/>
        </div>
        <div className = "the-other-content">
          <header>
            <img src = { menu } alt=""
            onClick = { () => this.setState( ( state ) => ({
              side_active: !state.side_active
            })) }/>
            <img src = { logo } alt=""/>
            <img src = { user } alt=""/>
          </header>
        </div>
      </div>
    )
  }
}
