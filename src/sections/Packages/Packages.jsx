import React, { Component } from 'react';
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
                        We have a number of different packages that can be tailored to suit your event. Why not try combining one of the packages with some of our ad-ons to make your event extra special!
                    </p>
                    <p><small className="packages__disclaimer">
                        Note: Prices may vary depending on distance to venue and playing time
                    </small></p>
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
                </div>
            </div>
        );
    }
}

export default Packages;
