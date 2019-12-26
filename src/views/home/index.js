import React from 'react';

import './home.scss';
import ForasCarousel from '../../components/ForasCarousel';
import ForasIconCard from '../../components/ForasIconCard';
import Line from '../../components/Line';

const icon_map = require('../../assets/images/map.png');
const icon_filter = require('../../assets/images/filter.png');
const icon_apply = require('../../assets/images/apply.png');
const icon_notification = require('../../assets/images/notification.png');
const img_iPhone = require('../../assets/images/iPhone.png');
const img_AppStore = require('../../assets/images/App Store.png');
const img_GooglePlay = require('../../assets/images/Google Play.png');

const icon_card_data = [
    {
        iconURL : icon_map,
        title : 'خريطة الفرص',
        description : 'تصفح فرص العمل القريبة منك على خريطة الفرص واختر الفرصة المناسبة لك',
    },
    {
        iconURL : icon_filter,
        title : 'فلتر الف',
        description : 'يمكنك فلترة الفرص المتوفرة لتختار الفرصة الأنسب لك',
    },
    {
        iconURL : icon_apply,
        title : 'تقدم للوظيفة المن',
        description : 'يمكنك التقدم للوظيفة التي تعجبك بسهولة',
    },
    {
        iconURL : icon_notification,
        title : 'ظبط التنبيه',
        description : 'يمكنك ظبط إعدادات التنبيهات الواردة لتصلك التنبيهات التي تهمك',
    }
];

function Home() {
    return (
        <div className="main">
            <ForasCarousel />
            <div className="container">
                <div className="row py-5">
                    <div className="col-6">
                        <p className="text-right">
                        عن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأنسب لهم. عن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأنسب لهم. عن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأنسب لهم. عن تطبيق فرصنا: فرصنا هو موقع
                        </p>
                    </div>
                    <div className="col-6">
                        <p className="text-right">
                        ن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأنسب لهم. عن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأنسب لهم. عن تطبيق فرصنا: فرصنا هو موقع وتطبيق يسمح للمستخدمين بالبحث عن الفرص المناسبة لهم عن طريق خريطة الفرص والتي تيمح لهم بإختيار الوظيفة الأقرب أو الأن
                        </p>
                    </div>
                </div>
                <Line />
                <div className="row py-5">
                    {Object.entries(icon_card_data).map(([key, obj]) => {
                        return (
                            <div className="col-3" key={key}>
                                <ForasIconCard iconURL={obj.iconURL} title={obj.title} description={obj.description} />
                            </div>
                        );
                    }
                    )}
                </div>
                <Line />
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

export default Home;