import React, { Component } from 'react';
import {
    faCheck,
    faClock,
    faMusic,
    faPlayCircle,
    faHeadphones,
    faLightbulb
 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PackageCard from '../../components/PackageCard/PackageCard';
import './Packages.scss';
import adons from './adons.json';
import { bronze, silver, gold } from '../../components/PackageCard/images';

const BRONZE_PRICE = "250";
const SILVER_PRICE = "275";
const GOLD_PRICE = "350";

class Packages extends Component {
    constructor(props) {
        super(props)
        this.state = {
            packagePrice: 0,
            adonsPrice: 0,
            selectedPackage: null
        }
    }

    handleRadioSelect = ({target: { value, name }}) => this.setState({ packagePrice: value, selectedPackage: name});

    handleCheckboxSelect = ({target: {checked, value}}) => {
        const { adonsPrice } = this.state;
        checked
            ? this.setState({adonsPrice: parseInt(adonsPrice) + parseInt(value)})
            : this.setState({adonsPrice: parseInt(adonsPrice) - parseInt(value)});
    }

    render() {
        const { packagePrice, adonsPrice, selectedPackage } = this.state;
        const totalPrice = parseInt(packagePrice) + parseInt(adonsPrice);
        const barClasses = totalPrice > 0 ? 'packages__price-bar packages__price-bar--open' : 'packages__price-bar';
        return (
            <div className="packages">
                <div className="container">
                    <h1 className="packages__title">Packages</h1>
                    <p className="packages__intro">You can browse our various sound and lighting packages below along with our add-on items that we can provide. Selecting each option will provide you with an estimated package cost at the bottom of the screen. </p>

                    <p>If you're not quite sure what you'll need for your event yet, please feel free to get in touch using our contact form and we can discuss the details.</p>

                    <small>Note this cost may be subject to change due to playing time and distance to venue. </small>
                    <div className="row packages__cards">
                        <div className="col-lg-4">
                            <PackageCard
                                id="bronze-images"
                                title="Bronze"
                                price={BRONZE_PRICE}
                                packageImages={bronze}
                                selected={ selectedPackage === 'bronze' }
                            >
                                <div className="packages__cards-buttons">
                                    <button value={BRONZE_PRICE} name="bronze" className="btn packages__cards-button" onClick={this.handleRadioSelect}>      Select Package
                                    </button>
                                </div>
                                <ul className="packages__cards-text">
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faClock} />
                                        4.5hrs DJ Performance
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faHeadphones} />
                                        DJ Booth
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faPlayCircle} />
                                        2 speakers
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faLightbulb} />
                                        2 lights on podiums
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faMusic} />
                                        Birthday parties, anniversaries, Christening/communion
                                    </li>
                                </ul>
                            </PackageCard>
                        </div>
                        <div className="col-lg-4">
                            <PackageCard
                                id="silver-images"
                                title="Silver"
                                price={SILVER_PRICE}
                                packageImages={silver}
                                selected={ selectedPackage === 'silver' }
                            >
                                <div className="packages__cards-buttons">
                                    <button value={SILVER_PRICE} name="silver" className="btn packages__cards-button" onClick={this.handleRadioSelect}>      Select Package
                                    </button>
                                </div>
                                <ul className="packages__cards-text">
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faClock} />
                                        4.5hrs DJ Performance
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faHeadphones} />
                                        DJ Booth
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faPlayCircle} />
                                        2 speakers + 2 subwoofers
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faLightbulb} />
                                        4 lights on podiums
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faMusic} />
                                        Weddings, birthday parties, anniversaries, Christening/communion
                                    </li>
                                </ul>
                            </PackageCard>
                        </div>
                        <div className="col-lg-4">
                            <PackageCard
                                id="gold-images"
                                title="Gold"
                                price={GOLD_PRICE}
                                packageImages={gold}
                                selected={ selectedPackage === 'gold' }
                            >
                                <div className="packages__cards-buttons">
                                    <button value={GOLD_PRICE} name="gold" className="btn packages__cards-button" onClick={this.handleRadioSelect}>        Select Package
                                    </button>
                                </div>
                                <ul className="packages__cards-text">
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faClock} />
                                        4.5hrs DJ Performance
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faHeadphones} />
                                        DJ Booth
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faPlayCircle} />
                                        4 speakers + 2 subwoofers
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faLightbulb} />
                                        Full lighting rig with various fixtures
                                    </li>
                                    <li className="packages__cards-text-item">
                                        <FontAwesomeIcon className="packages__cards-text-item-icon" icon={faMusic} />
                                        Weddings, birthday parties, anniversaries
                                    </li>
                                </ul>
                            </PackageCard>
                        </div>
                    </div>
                    <h3 className="packages__steps">Add-ons</h3>
                    <p className="packages__steps-text">Make your event extra special by selecting one or more of our package add-ons. </p>
                    <table className="table packages__table">
                        <caption>List of add-ons</caption>
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
                                        <label for={`item-${index}`}>
                                            <span>
                                                <FontAwesomeIcon className="packages__tick" icon={faCheck} />
                                            </span>
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className={barClasses}>
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
