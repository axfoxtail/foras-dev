import React from 'react';

import './individuals-favorites.scss';
import ForasHeroImage from '../../../components/ForasHeroImage';
import ForasFilterIndividualsFav from '../../../components/ForasFilterIndividualsFav';

const slide05 = require('../../../assets/images/slide05.png');

function IndividualFavorites() {
    return (
        <div className="main">
            <ForasHeroImage src={slide05} footer={true} />
            <ForasFilterIndividualsFav />
        </div>
    );
}

export default IndividualFavorites;