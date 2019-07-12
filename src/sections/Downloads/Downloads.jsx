import React, { Component } from 'react';
import DocumentListItem from '../../components/DocumentListItem/DocumentListItem';
import './Downloads.scss';

const title1 = 'Public Liability Insurance Certificate';
const description1 = 'Click to download.';
const path1 = '/test.pdf';
const filename1 = 'pliCert';

const title2 = 'Portable Appliance Testing Certificate';
const description2 = 'Click to download.';
const path2 = '/test.pdf';
const filename2 = 'patCert'

class Downloads extends Component {
    render() {
        return (
            <section className="bg-light page-section" id="downloads">
                <div className="container downloads">
                    <h2 className="downloads__title text-center display-5">Downloads</h2>
                    <DocumentListItem title={title1} description={description1} path={path1} filename={filename1} />
                    <DocumentListItem title={title2} description={description2} path={path2} filename={filename2} />
                </div>
            </section>
        );
    }
}

export default Downloads;
