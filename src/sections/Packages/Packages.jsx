import React, { Component } from 'react';
import PackageCard from '../../components/PackageCard/PackageCard';
import './Packages.scss';
import adons from './adons.json';

class Packages extends Component {
    render() {
        const tableWidth = { width: "80%" };
        return (
            <div className="packages">
                <div class="container">
                    <h2 className="packages__title">Packages</h2>
                    <p className="packages__intro">
                        We have a number of different packages that can be tailored to suit your event. Why not try combining one of the packages with some of our <a className="text-warning packages__adons-link" href="#adons">Ad-ons</a> to make your event extra special!
                    </p>
                    <p><small className="packages__disclaimer">
                        Note: Prices may vary depending on distance to venue and playing time
                    </small></p>
                    <div class="row">
                        <div className="col-12 col-lg-6">
                            <PackageCard id="bronze" title="Bronze Package" price="250">
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
                        </div>
                        <div className="col-12 col-lg-6">
                            <PackageCard id="silver" title="Silver Package" price="275">
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
                        </div>
                        <div class="col-12 col-lg-6">
                            <PackageCard id="gold" title="Gold Package" price="350">
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
                        </div>
                        <div className="col-12 col-lg-6">
                            <PackageCard id="kids" title="Kids Parties" price="180">
                                <ul>
                                    <li>Up to 3hrs DJ Performance</li>
                                    <li>DJ booth</li>
                                    <li>2 speakers</li>
                                    <li>Age appropriate playlist</li>
                                    <li>Classic party games</li>
                                    <li>Participation dances</li>
                                </ul>
                            </PackageCard>
                        </div>
                    </div>
                    <div className="packages__adons">
                        <h2 id="adons" className="packages__title">Ad-ons</h2>
                        <table class="table">
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
                    </div>
                </div>
            </div>
        );
    }
}

export default Packages;
