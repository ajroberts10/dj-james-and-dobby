import React, { Component } from 'react';
import PackageCard from '../../components/PackageCard/PackageCard';
import './Packages.scss';

class Packages extends Component {
    render() {
        return (
            <div className="packages">
                <div class="container">
                    <div class="row">
                        <div className="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                        <div className="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                        <div class="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                        <div className="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                        <div className="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                        <div class="col-12 col-lg-6">
                            <PackageCard />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Packages;
