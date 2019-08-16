import React, { Component } from 'react';

import './ContactModal.scss';

class ContactModal extends Component {
    render() {
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
                                <label>Email address</label>
                                <input type="email" name="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="form-group">
                                <label>Example textarea</label>
                                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactModal;
