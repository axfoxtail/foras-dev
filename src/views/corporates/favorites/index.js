import React from 'react';

import './corporates-favorites.scss';
import ForasHeroImage from '../../../components/ForasHeroImage';
import ForasFilterCorporates from '../../../components/ForasFilterCorporates';

const hero_img = require('../../../assets/images/slide04.png');

function CorporatesFavorites() {
    return (
        <div className="main">
            <ForasHeroImage src={hero_img} footer={true} />
            <ForasFilterCorporates />
        </div>
    );
}

export default CorporatesFavorites;