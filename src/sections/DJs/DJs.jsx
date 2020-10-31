import React, { Component } from 'react';
import BioCard from '../../components/BioCard/BioCard';
import './DJs.scss';

const getAge = birthDate => Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e+10);

const james = {
    position: 'left',
    title: 'DJ James',
    name: 'James Watt',
    age: getAge('1983-10-10'),
    music: 'Northern Soul, Motown, Disco, 80s, RnB, House, Garage, Hip Hop',
    image: 'icon_james.jpg'
}

const dobby = {
    position: 'right',
    title: 'DJ Dobby',
    name: 'James Chappell Steele',
    age: getAge('1985-06-30'),
    music: 'Pop, 90s RnB, Garage, Dance, Cheese, Party Anthems',
    image: 'icon_dobby.jpg'
}

class DJs extends Component {
    render() {
        return (
            <div className="djs">
                <div className="container">
                    <h1>Hi! We're DJ James & DJ Dobby</h1>
                <div className="djs__about">
                        <p>We first met almost 20 years ago, starting our DJ careers with an agency based in Wythenshawe.
                        We started playing in nightclubs, bars and pubs over the South Manchester area.
                        The life of a busy DJ is a lonely one and after starting families we decided to team up!
                        </p>
                        <p>
                        Combining our wealth of experience, music knowledge, skillsets and production performance, we proved to be an instant hit at private events and functions.
                        We have now performed at the majority of popular event venues across the North West of England, and built up a great rapport with venues, vendors and regular clients.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            <BioCard {...james} />
                            <BioCard {...dobby} />
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default DJs;
