import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './ContactModal.scss';
import adOns from '../../sections/Packages/adons.json';

class ContactModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            message: '',
            packageSelect: '',
            adonSelect: '',
            eventDate: '',
            startTime: '',
            endTime: ''
        };
    };


    handleChange = event => this.setState({ [event.target.name]: event.target.value });

    handleDateChange = date => {
        this.setState({
            eventDate: date
        });
    };

    handleTimeChange = time => {
        this.setState({
            startTime: time
        });
    };

    handleEndTimeChange = time => {
        this.setState({
            endTime: time
        });
    };

    render() {
        const { email, message, packageSelect, startTime, endTime, eventDate} = this.state;

        return (
            <div className="modal fade" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Contact Us</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form name="contact" method="POST" data-netlify="true" onSubmit={this.handleSubmit}>
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="form-group">
                                    <label>Your email address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Event Date</label>
                                    <p>
                                        <DatePicker
                                            name="eventDate"
                                            selected={eventDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            value={eventDate}
                                            onFocus={(e) => e.target.readOnly = true}
                                        />
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label>Event Start Time</label>
                                    <p>
                                    <DatePicker
                                        selected={startTime}
                                        value={startTime}
                                        onChange={this.handleTimeChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeFormat="HH:mm"
                                        dateFormat="HH:mm"
                                        timeCaption="Start Time"
                                    />
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label>Event End Time</label>
                                    <p>
                                    <DatePicker
                                        selected={endTime}
                                        value={endTime}
                                        onChange={this.handleEndTimeChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={30}
                                        timeFormat="HH:mm"
                                        dateFormat="HH:mm"
                                        timeCaption="End Time"
                                    />
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label>Which package are you interested in?</label>
                                    <select
                                        name="packageSelect"
                                        id="packageSelect"
                                        className="form-control"
                                        value={packageSelect}
                                        onChange={this.handleChange}
                                    >
                                        <option value="notSure">Not sure yet</option>
                                        <option value="bronze">Bronze</option>
                                        <option value="silver">Silver</option>
                                        <option value="gold">Gold</option>
                                        <option value="kids">Kids</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        name="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="message"
                                        rows="3"
                                    />
                                </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactModal;
