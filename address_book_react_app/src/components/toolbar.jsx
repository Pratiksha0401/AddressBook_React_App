import './addressbook-form/addressbook-form.scss';
import React from 'react';
import logo from '../assets/logo.jpeg'

class ToolBar extends React.Component {
    render() {
        return (
            <div>
                <header className="header header-content">
                    <div className="logo-content">
                        <img src={logo} alt="Logo" />
                        <div>
                            <span className="per-text">ADDRESS</span><br />
                            <span className="per-text per-address">BOOK</span>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default ToolBar;