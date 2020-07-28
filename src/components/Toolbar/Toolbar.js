import React from 'react'

import './Toolbar.css'

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div></div>
      
      {/* <div className="toolbar_logo"><a href="/">Processos</a></div> */}
      <div className="toolbar_navigation-items">
        <div className="toolbar_logo"><a href="/">Processos</a></div>

        {/* <p>Processos</p> */}
        <ul>
          <li><a href="/">Icons</a></li>
          <li><a href="/">Profile</a></li>
        </ul>
      </div>


      <div className="spacer"/>

      
      <div className="toolbar_navigation-items">
        <ul>
          <li><a href="/">Icons</a></li>
          <li><a href="/">Profile</a></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default toolbar