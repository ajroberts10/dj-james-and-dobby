import React, { Component } from 'react';

import './ContactModal.scss';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactModal extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', message: '', packages: '' };
    }

    handleSubmit = event => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        event.preventDefault();
    };

    handleChange = event => this.setState({ [event.target.name]: event.target.value });


    render() {
        const { email, message, packages } = this.state;
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
                        <form name="contact" method="POST" data-netlify="true">
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
                                <label>Which package are you interested in?</label>
                                <select
                                    name="packageSelect"
                                    id="packageSelect"
                                    className="form-control"
                                    value={packages}
                                    onChange={this.handleChange}
                                >
                                    <option value="notSure">Not sure yet</option>
                                    <option value="bronze">Bronze</option>
                                    <option value="silver">Silver</option>
                                    <option value="golg">Gold</option>
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
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactModal;
