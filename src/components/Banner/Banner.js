import React from 'react';
import './Banner.css';

const Banner = () => {


    return (
        <div>
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col text-center banner-items">
                            <h2>Best food waiting for your belly</h2>
                            <div className="banner-input">
                                <input type="text" placeholder="Search food items" />
                                <button className="btn primary-btn">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;