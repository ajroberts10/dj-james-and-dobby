import React, { Component } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import './ContactModal.scss';

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
            endTime: '',
            contactNumber: '',
            fullName: '',
            venue: ''
        };
    };


    handleChange = event => this.setState({ [event.target.name]: event.target.value });

    handleDateChange = date => {
        this.setState({
            eventDate: date
        });
    }

    render() {
        const { email, message, packageSelect, startTime, endTime, eventDate, contactNumber, fullName, venue} = this.state;

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
                                    <label>Your email address *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="email"
                                        placeholder="name@example.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your contact number</label>
                                    <input
                                        type="tel"
                                        name="contactNumber"
                                        value={contactNumber}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="contactNumber"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Your full name *</label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={fullName}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="fullName"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Event date *</label>
                                    <span className="contactModal__date">
                                        <DatePicker
                                            name="eventDate"
                                            selected={eventDate}
                                            onChange={this.handleDateChange}
                                            dateFormat="dd/MM/yyyy"
                                            value={eventDate}
                                            onFocus={(e) => e.target.readOnly = true}
                                            required
                                        />
                                    </span>
                                </div>
                                <div className="form-group">
                                    <label>Event venue *</label>
                                    <input
                                        type="text"
                                        name="venue"
                                        value={venue}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="venue"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Event Start Time</label>
                                    <p>
                                        <input
                                            type="time"
                                            id="startTime"
                                            name="startTime"
                                            value={startTime}
                                            onChange={this.handleChange}>
                                        </input>
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label>Event End Time</label>
                                    <p>
                                        <input
                                            type="time"
                                            id="endTime"
                                            name="endTime"
                                            value={endTime}
                                            onChange={this.handleChange}>
                                        </input>
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
                                    <label>Message *</label>
                                    <textarea
                                        name="message"
                                        value={message}
                                        onChange={this.handleChange}
                                        className="form-control"
                                        id="message"
                                        rows="3"
                                        placeholder="tell us more about your event"
                                        required
                                    />
                                </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </form>
                            <small><i>* Required fields</i></small>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactModal;
