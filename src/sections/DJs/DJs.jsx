import React, { Component } from 'react';
import BioCard from '../../components/BioCard/BioCard';
import './DJs.scss';

const james = {
    position: 'left',
    title: 'DJ James',
    name: 'James Watt',
    age: '36',
    music: 'Northen Soul, Notown, Disco, 80s, RnB, House, Garage, Hip Hop'
}

const dobby = {
    position: 'right',
    title: 'DJ Dobby',
    name: 'James Chappell Steele',
    age: '35',
    music: 'Pop, 90s RnB, Garage, Dance, Cheese, Party Anthems'
}

class DJs extends Component {
    render() {
        return (
            <div className="djs">
                <div className="container">
                    <BioCard {...james} />
                    <BioCard {...dobby} />
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
                </div>
            </div>
        );
    }
}

export default DJs;
