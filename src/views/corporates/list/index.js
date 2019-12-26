import React from 'react';

import './corporates-list.scss';
import ForasHeroImage from '../../../components/ForasHeroImage';
import ForasFilterCorporates from '../../../components/ForasFilterCorporates';
import userApi from '../../../services/user.service';

const hero_img = require('../../../assets/images/slide04.png');

class CorporatesList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            corporates: [],
        }
    }

    componentDidMount() {
        global.sortObj = {
            orderBy: null,
            orderDirection: 'ASC',
            search: null
        };
        userApi.getCorporates()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({corporates: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    getCorporates = () => {
        userApi.getCorporates(global.sortObj)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({corporates: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    handleSearch = (search) => {
        global.sortObj.search = search;
        this.getCorporates();
    }

    handleSort = () => {
        this.getCorporates();
    }

    render() {
        return (
            <div className="main">
                <ForasHeroImage src={hero_img} footer={true} handleSearch={this.handleSearch} />
                <ForasFilterCorporates data={this.state.corporates} handleSort={this.handleSort} />
            </div>
        );
    }
}

export default CorporatesList;