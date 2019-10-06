import React, { Component } from 'react';

import MenuItem from '../../components/MenuItem/MenuItem';
import './FAQs.scss';
import faqs from './faqs';

class Home extends Component {
    render() {
        return (
            <div className="faqs">
                <div class="container">
                    <h1 className="faqs__title">Frequently Asked Questions</h1>
                    <div className="row">
                    <div className="col-lg-9">
                        <p>During our time, we've come across a few frequently asked questions. We've tried to answer some of them here but please feel free to get in touch if you'd like to discuss your event in more detail.</p>
                    </div>
                    <div className="col-lg-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="faqs__image">
                                    <img src="https://res.cloudinary.com/musicandcolour/image/upload/v1570307707/djs_enk15v.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {faqs.map((item, index) => {
                        const id = `item-${index}`;
                        return (
                        <MenuItem text={item.question} id={id}>
                            {item.answer}
                        </MenuItem>
                    )})}
                    <small>Please note; we may take a few photos and videos at your event for our social media accounts. We will present them to you via messenger platforms and request permission to use them first</small>



                </div>

            </div>
        );
    }
}

export default Home;
