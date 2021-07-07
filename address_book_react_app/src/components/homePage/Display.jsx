import React from 'react';
import './display.scss';
import deleteIcon from '../../assets/delete-black-18dp.svg';
import editIcon from '../../assets/create-black-18dp.svg';
import { withRouter, useHistory } from 'react-router-dom';
import { element } from 'prop-types';
import AddressbookService from '../../services/addressbook-service';

const Display = (props) => {
    const addressbookService = new AddressbookService();
    const history =useHistory();

    const remove = (id) => {
        addressbookService.deletePerson(id).then(responseData =>{
            alert("Employee deleted successfully",responseData.data);
            history.push("/")
        }).catch(err=>{
            alert("error ehile deleting data");
        })
    }

    return(
        <div className="table-main">
            <table id="display" className="table">
            <tbody>
                <tr key={-1}>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>zipcode</th>
                    <th>PhoneNumber</th>
                    <th>Actions</th>
                </tr>
                {
                    props.addressArray && props.addressArray.map((element, id) => (
                        <tr key={id}>
                            <td>{element.name}</td>
                            <td>{element.address}</td>
                            <td>{element.city}</td>
                            <td>{element.state}</td>
                            <td>{element.zipcode}</td>
                            <td>{element.phoneNumber}</td>
                            <td>
                                <img src={deleteIcon} alt="Delete" onClick={() => remove(element.id)}/>
                                <img src={editIcon} alt="Edit" />
                            </td>    
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </div>
    )
}
export default withRouter(Display);