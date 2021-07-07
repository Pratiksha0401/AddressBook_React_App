import React, { useState, useEffect } from 'react';
import './addressbook-form.scss';
import ToolBar from '../toolbar';
import { useParams, Link, withRouter } from 'react-router';
import CrossIcon from '../../assets/cancel.jpeg';
import AddressbookService from '../../services/addressbook-service';

const PayrollForm = (props) => {
    let initialValue = {
        name: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        phoneNumber: '',
        id: '',
        error: {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            phoneNumber: '',
        }
    }

    const [formValue, setForm] = useState(initialValue);

    const changeValue = (event) => {
        setForm({ ...formValue, [event.target.name]: event.target.value })
    }

    const validData = async () => {
        let isError = false;
        let error = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            phoneNumber: '',
        }

        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test(formValue.name)) {
            isError = false;
        } else {
            error.name = 'Invalid Name'
            isError = true;
        }

        if (formValue.address === '') {
            error.address = 'Address is required field'
            isError = true;
        }

        if (formValue.city === '') {
            error.city = 'City is required field'
            isError = true;
        }

        if (formValue.state === '') {
            error.state = 'State is required field'
            isError = true;
        }

        if (formValue.zipcode === '') {
            error.zipcode = 'Zipcode is required field'
            isError = true;
        }

        let phoneNumberRegex = RegExp('[+]{0,1}[0-9]{1,}\\s{0,1}[1-9]{1}[0-9]{9}$')
        if (phoneNumberRegex.test(formValue.phoneNumber)) {
            isError = false;
        } else {
            error.phoneNumber = 'Invalid Phone Number'
            isError = true;
        }

        await setForm({ ...formValue, error: error })
        return isError;
    }

    const addressbookService = new AddressbookService();

    const save = async (event) => {
        event.preventDefault();
        if (await validData()) {
            console.log('error', formValue);
            return false;
        }

        let object = {
            name: formValue.name,
            address: formValue.address,
            city: formValue.city,
            state: formValue.state,
            zipcode: formValue.zipcode,
            phoneNumber: formValue.phoneNumber
        }

        addressbookService.addPerson(object).then(response => {
            alert("Data Added successfully",response.data);
            reset();
            console.log("Data added");
        }).catch(err => {
            console.log("err while Add")

        })
    }
    const reset = () => {
        setForm({ ...initialValue });
        console.log(formValue);
    }



    return (
        <div className="payroll-main" >
            <ToolBar />

            <div className="form-content">
                <form className="form " action="#" onSubmit={save}>
                    <div className="form-head">
                        <div className="form-head-text">PERSON ADDRESS FORM</div>
                        <div className="cancel-img"><img src={CrossIcon} alt="crossIcon" /></div>
                    </div>

                    <div className="row-content">
                        <label htmlFor="name" className="label text"></label>
                        <input type="text" className="input" value={formValue.name} onChange={changeValue} id="name" name="name" placeholder="Full Name.." required />
                    </div>
                    <div className="error-output">{formValue.error.name}</div>

                    <div className="row-content">
                        <label htmlFor="address" className="label text"></label>
                        <input type="text" className="input" value={formValue.address} onChange={changeValue} id="address" name="address" placeholder="Address.." required
                            style={{ height: "100px" }} />
                    </div>
                    <div className="error-output">{formValue.error.address}</div>
                    <div className="row-content">
                        <label htmlFor="address" className="label text"></label>
                        <div>
                            <select id="city" name="city" value={formValue.city} onChange={changeValue} required>
                                <option value="">Select City</option>
                                <option value="Agra">Agra</option>
                                <option value="Bangalore">Bangalore</option>
                                <option value="Chandigarh">Chandigarh</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Dehradun">Dehradun</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Jaipur">Jaipur</option>
                                <option value="Lucknow">Lucknow</option>
                                <option value="Mangalore">Mangalore</option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Mysore">Mysore</option>
                                <option value="Noida">Noida</option>
                                <option value="Pune">Pune</option>
                                <option value="Ranchi">Ranchi</option>
                                <option value="Roorkee">Roorkee</option>
                                <option value="Udaipur">Udaipur</option>
                                {/* <div className="error-output">{formValue.error.city}</div> */}
                            </select>
                            
                            <select id="state" name="state" value={formValue.state} onChange={changeValue} required>
                                <option value="">Select State</option>
                                <option value="Jharkhand">Jharkhand</option>
                                <option value="Karnataka">Karnataka</option>
                                <option value="Maharastra">Maharastra</option>
                                <option value="Punjab">Punjab</option>
                                <option value="Rajasthan">Rajasthan</option>
                                <option value="Tamil Nadu">Tamil Nadu</option>
                                <option value="Telangana">Telangana</option>
                                <option value="Uttarakhand">Uttarakhand</option>
                                <option value="Uttar Pradesh">Uttar Pradesh</option>
                            </select>
                            {/* <div className="error-output">{formValue.error.state}</div> */}
                            <input type="number" className="input-code" onChange={changeValue} value={formValue.zipcode} id="zipcode" name="zipcode" placeholder="Zip Code.." required />
                            {/* <div className="error-output">{formValue.error.zipcode}</div> */}
                        </div>
                            
                    </div>

                    <div className="row-content">
                        <label htmlFor="number" className="label text"></label>
                        <input type="text" className="input" value={formValue.phoneNumber} onChange={changeValue} id="phoneNumber" name="phoneNumber" placeholder="Phone Number.." />
                        <div className="error-output">{formValue.error.phoneNumber}</div>
                    </div>
                    <div className="button-parent">
                        <div className="add-reset">
                            <button className="button addButton" type="submit">Add</button>
                            <button type="reset" onClick={reset} className="button resetButton">Reset</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>

    );
}

export default PayrollForm;