import React, { Component } from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PackageCard from '../../components/PackageCard/PackageCard';
import MenuItem from '../../components/MenuItem/MenuItem';
import './Packages.scss';
import adons from './adons.json';
import { bronze, silver, gold } from '../../components/PackageCard/images';

class Packages extends Component {
    render() {
        const tableWidth = { width: "80%" };
        return (
            <div className="packages">
                <div class="container">
                    <h1 className="packages__title">Packages</h1>
                    <p className="packages__intro">
                        We have a number of different packages that can be tailored to suit your event.
                    </p>
                    <h3 className="packages__steps">Step 1:</h3>
                    <p className="packages__steps-text">Identify which package would be suitable for your event. When selecting a package, it's worth thinking about the size of the venue for your event and the number of guests you will be expecting. If you're not sure which would fit best, please feel free to get in touch to discuss the details.</p>

                    <h2><a className="packages__link" href="/packages/kids">Kid's Parties <FontAwesomeIcon className="packages__icon" icon={faChevronRight} /></a></h2>

                    <MenuItem text="Bronze Package" id="bronze">
                        <PackageCard id="bronze-images" title="Bronze Package" price="250" packageImages={bronze}>
                            <ul>
                                <li>4.5hrs DJ Performance</li>
                                <li>DJ booth</li>
                                <li>2 speakers</li>
                                <li>2 lights on podiums (choice of moving heads or rotospheres)</li>
                                <li>Suitable for small venues and up to 100 guests</li>
                                <li>Birthday parties, anniversaries, Christening/communion</li>
                                <li>Set up time: 45mins</li>
                                <li>Pack down time: 45mins</li>
                            </ul>
                        </PackageCard>
                    </MenuItem>
                    <MenuItem text="Silver Package" id="silver">
                        <PackageCard id="silver-images" title="Silver Package" price="275" packageImages={silver}>
                            <ul>
                                <li>4.5hrs DJ Performance</li>
                                <li>DJ booth</li>
                                <li>2 speakers + 2 subwoofers</li>
                                <li>4 lights on podiums</li>
                                <li>Suitable for medium venues with large setup space and up to 200 guests</li>
                                <li>Weddings, birthday parties, anniversaries, Christening/communion</li>
                                <li>Set up time: 60mins</li>
                                <li>Pack down time: 60mins</li>
                            </ul>
                        </PackageCard>
                    </MenuItem>
                    <MenuItem text="Gold Package" id="gold">
                        <PackageCard id="gold-images" title="Gold Package" price="350" packageImages={gold}>
                            <ul>
                                <li>4.5hrs DJ Performance</li>
                                <li>DJ booth</li>
                                <li>4 speakers + 2 subwoofers</li>
                                <li>Full lighting rig with various fixtures</li>
                                <li>Suitable for large venues and up to 300 guests</li>
                                <li>Weddings, birthday parties, anniversaries</li>
                                <li>Set up time: 90mins</li>
                                <li>Pack down time: 60mins</li>
                            </ul>
                        </PackageCard>
                    </MenuItem>



                    <h3 className="packages__steps">Step 2:</h3>
                    <p className="packages__steps-text">Make your event extra special by selecting one or more of our package ad-ons. </p>

                    <MenuItem text="Ad-ons" id="adons">
                        <table class="table packages__table">
                            <caption>List of ad-ons</caption>
                            <thead>
                                <tr>
                                    <th scope="col" style={tableWidth}>Item</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adons.map((item) => (
                                    <tr>
                                        <td>{item.name}</td>
                                        <td>{item.price.map((price) =>(
                                            <p>{price.value} <small>{price.desc}</small></p>
                                        ))}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </MenuItem>
                    <small className="packages__disclaimer">
                        Note: Prices may vary depending on distance to venue and playing time
                    </small>
                </div>
            </div>
        );
    }
}

export default Packages;
