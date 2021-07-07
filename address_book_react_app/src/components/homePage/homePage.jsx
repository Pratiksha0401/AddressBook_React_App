import './display.scss';
import Display from './Display';
import React from 'react';
import ToolBar from '../toolbar';
import { withRouter } from 'react-router-dom';
import AddIcon from '../../assets/add-24px.svg';
import SearchIcon from '../../assets/search-icon.png'
import { Link } from 'react-router-dom';
import AddressbookService from '../../services/addressbook-service';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            addressArray: [],
            serachExapand: ''
        }
        this.getAllPersons();
    }

    addressbooService = new AddressbookService();
    getAllPersons = () => {
        this.addressbooService.getAllPersons().then(responseData => {
            console.log("Data after get call", responseData.data);
            this.setState({ addressArray: responseData.data })
        }).catch(err => {
            console.log("Error while get", err);
        })
    }

    render() {
        return (
            <div>
                <ToolBar />
                <div className="header-content">
                    <div className="header-content sub-main-content">
                        <div className="per-detail-text">
                            Person Details<div className="per-count">{this.state.addressArray.length}</div>
                        </div>
                        <Link to="addressbook-form" className="add-button" href="./AddPerson.html">
                            <img src={AddIcon} alt="Icon" />Add Person
                        </Link>
                    </div>
                </div>
                <div className="table-main">
                    <Display addressArray={this.state.addressArray}></Display>
                </div>

            </div>
        )
    }
}
export default withRouter(HomePage);