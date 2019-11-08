import React, { Component } from 'react';
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PackageCard from '../../components/PackageCard/PackageCard';
import MenuItem from '../../components/MenuItem/MenuItem';
import './Packages.scss';
import adons from './adons.json';
import { bronze, silver, gold } from '../../components/PackageCard/images';

const KIDS_PRICE = "180";
const BRONZE_PRICE = "250";
const SILVER_PRICE = "275";
const GOLD_PRICE = "350";

class Packages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            packagePrice: 0,
            adonsPrice: 0
        }
    }

    handleRadioSelect = event => this.setState({ packagePrice: event.target.value});

    handleCheckboxSelect = ({target: {checked, value}}) => {
        const { adonsPrice } = this.state;
        checked
            ? this.setState({adonsPrice: parseInt(adonsPrice) + parseInt(value)})
            : this.setState({adonsPrice: parseInt(adonsPrice) - parseInt(value)});
    }

    render() {
        const { packagePrice, adonsPrice } = this.state;
        const totalPrice = parseInt(packagePrice) + parseInt(adonsPrice);
        return (
            <div className="packages">
                <div className="container">
                    <h1 className="packages__title">Packages</h1>
                    <p className="packages__intro">
                        We have a number of different packages that can be tailored to suit your event.
                    </p>
                    <h3 className="packages__steps">Step 1:</h3>
                    <p className="packages__steps-text">Identify which package would be suitable for your event. When selecting a package, it's worth thinking about the size of the venue for your event and the number of guests you will be expecting. If you're not sure which would fit best, please feel free to get in touch to discuss the details.</p>


                    <div className="row packages__kids">
                        <div className="col-10">
                            <h2><a className="packages__link" href="/packages/kids">Kid's Parties <FontAwesomeIcon className="packages__icon" icon={faChevronRight} /></a></h2>
                        </div>
                        <div className="col-2 packages__select">
                            <input type="radio" value={KIDS_PRICE} id="packageSelectKids" name="packageSelect" onChange={this.handleRadioSelect} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <MenuItem text="Bronze Package" id="bronze">
                                <PackageCard id="bronze-images" title="Bronze Package" price={BRONZE_PRICE} packageImages={bronze}>
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
                        </div>
                        <div className="col-2 packages__select">
                            <input type="radio" value={BRONZE_PRICE} id="packageSelectBronze" name="packageSelect" onChange={this.handleRadioSelect} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <MenuItem text="Silver Package" id="silver">
                                <PackageCard id="silver-images" title="Silver Package" price={SILVER_PRICE} packageImages={silver}>
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
                        </div>
                        <div className="col-2 packages__select">
                            <input type="radio" value={SILVER_PRICE} id="packageSelectSilver" name="packageSelect" onChange={this.handleRadioSelect} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10">
                            <MenuItem text="Gold Package" id="gold">
                                <PackageCard id="gold-images" title="Gold Package" price={GOLD_PRICE} packageImages={gold}>
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
                        </div>
                        <div className="col-2 packages__select">
                            <input type="radio" value={GOLD_PRICE} id="packageSelectGold" name="packageSelect" onChange={this.handleRadioSelect} />
                        </div>
                    </div>

                    <h3 className="packages__steps">Step 2:</h3>
                    <p className="packages__steps-text">Make your event extra special by selecting one or more of our package ad-ons. </p>

                    {/* <MenuItem text="Ad-ons" id="adons"> */}
                        <table className="table packages__table">
                            <caption>List of ad-ons</caption>
                            <thead>
                                <tr>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Select</th>
                                </tr>
                            </thead>
                            <tbody>
                                {adons.map(({name, price: {value, desc}}, index) => (
                                    <tr>
                                        <td>{name}</td>
                                        <td><p>£{value} <small>{desc}</small></p>
                                        </td>
                                        <td>
                                            <input className="packages__check" type="checkbox" value={value} id={`item-${index}`} name="packageSelect" onChange={this.handleCheckboxSelect} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    {/* </MenuItem> */}
                    <small className="packages__disclaimer">
                        Note: Prices may vary depending on distance to venue and playing time
                    </small>
                </div>
                <div className="packages__price-bar">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="packages__price-value">{`Package Price: £${totalPrice}`}</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Packages;
