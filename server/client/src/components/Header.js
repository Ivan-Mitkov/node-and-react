import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav>
            <div className="nav-wrapper">
              <a href="#" class="left brand-logo">Emaily</a>
              <ul  className="right">
                <li><a href="#">Login With Google</a></li>
                
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header
