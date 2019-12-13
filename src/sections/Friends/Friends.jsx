import React, { Component } from "react";

import "./Friends.scss";

class Friends extends Component {
    render() {
        const tableWidth = { width: "0%" };
        return (
            <div className="friends">
                <div class="container">
                    <h1 className="friends__title">Friends</h1>
                    <p>If you're looking for more than just music for your event, we may be able to provide some help. Over the years, we've established close links with a number of local businesses and individuals that would be happy to assist with planning that special occasion.</p>
                    <p>Below are some links to friends of ours that we trust will provide quality and experience for your event:</p>
                    <table class="table friends__table">
                            <tbody>
                                <tr>
                                    <td className="friends__logo">
                                        <img className="friends__img" src="https://res.cloudinary.com/musicandcolour/image/upload/v1572010553/logos/logo.png"></img>
                                    </td>
                                    <td>Live music trio and DJs</td>
                                    <td><a className="friends__link" target="_blank" href="http://www.musicandcolour.co.uk">www.musicandcolour.co.uk</a></td>
                                </tr>
                                <tr>
                                    <td className="friends__logo">
                                        <img className="friends__img" src="https://res.cloudinary.com/musicandcolour/image/upload/v1572010800/logos/djgearhire-dark.png"></img>
                                    </td>
                                    <td>Event sound and lighting hire</td>
                                    <td><a className="friends__link" target="_blank" href="https://www.djgearhire.com">www.djgearhire.com</a></td>
                                </tr>
                                <tr>
                                    <td className="friends__logo">
                                        <img className="friends__img" src="https://res.cloudinary.com/musicandcolour/image/upload/v1576245965/logos/sale.png"></img>
                                    </td>
                                    <td>Function /conference venue hire</td>
                                    <td><a className="friends__link" target="_blank" href="https://www.saleevents.co.uk">www.saleevents.co.uk</a></td>
                                </tr>
                                <tr>
                                    <td className="friends__logo">
                                        <img className="friends__img" src="https://res.cloudinary.com/musicandcolour/image/upload/v1572010978/logos/pap.png"></img>
                                    </td>
                                    <td>Magic mirror, selfie wizard and selfie post box</td>
                                    <td><a className="friends__link" target="_blank" href="https://www.paparazzimirror.co.uk">www.paparazzimirror.co.uk</a></td>
                                </tr>
                                <tr>
                                    <td className="friends__logo">
                                        <img className="friends__img" src="https://res.cloudinary.com/musicandcolour/image/upload/v1572615937/logos/ai-harry-logo-01.png"></img>
                                    </td>
                                    <td>Registered charity providing a free holiday to ‘Harry’s Caravan’, Blackpool for any child (and family) who has had or is receiving treatment for cancer</td>
                                    <td><a className="friends__link" target="_blank" href="https://www.harrysholidayhangout.org.uk">www.harrysholidayhangout.org.uk</a></td>
                                </tr>
                                <tr>
                                    <td className="friends__logo">
                                        The Emma Cosgrove Foundation
                                    </td>
                                    <td>Supporting teens affected by cancer</td>
                                    <td><a className="friends__link" target="_blank" href="https://www.emmacosgrovefoundation.org">www.emmacosgrovefoundation.org</a></td>
                                </tr>

                            </tbody>
                        </table>
                </div>
            </div>
        );
    }
}

export default Friends;
