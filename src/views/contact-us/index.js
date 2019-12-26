import React from 'react';
import './contact-us.scss';
import ForasCarousel from '../../components/ForasCarousel';
import Line from '../../components/Line';
import ContactUsForm from '../../components/ContactUsForm';

const img_iPhone = require('../../assets/images/iPhone.png');
const img_AppStore = require('../../assets/images/App Store.png');
const img_GooglePlay = require('../../assets/images/Google Play.png');


function ContactUs() {
    return (
        <div className="main">
            <ForasCarousel />
            <div className="container p-3">
                <div className="contact-form-container">
                    <ContactUsForm />
                    <div className="my-5"></div>
                    <Line />
                </div>
            </div>
            <div className="bg-iphone py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6 px-5 py-3">
                            <img
                            className="d-block w-100"
                            src={img_iPhone}
                            alt="First slide"
                            />
                        </div>
                        <div className="col-6 position-relative">
                            <div className="text-center center-block">
                                <h3>جرب تطبيق فرص على ال</h3>
                                <div className="border-dot text-white mx-auto my-4">لتستمتع بالتجربة كاملة يمكنك تحميل تطبيقنا على الجوال. متوفرا على أجهزة الأندرويد والأبل.</div>
                                <a href="/">
                                    <img
                                    className="d-block btn-app-link"
                                    src={img_AppStore}
                                    alt="First slide"
                                    />
                                </a>
                                <a href="/">
                                    <img
                                    className="d-block btn-app-link"
                                    src={img_GooglePlay}
                                    alt="First slide"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;