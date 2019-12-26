import React from 'react';

import './individual-list.scss';
import ForasHeroImage from '../../../components/ForasHeroImage';
import ForasFilterIndividuals from '../../../components/ForasFilterIndividuals';
import userApi from '../../../services/user.service';

const slide05 = require('../../../assets/images/slide05.png');

class IndividualList extends React.Component {
    constructor(props) {
        super();
        this.state = {
            individuals: [],
        }
    }

    componentDidMount() {
        global.sortObj = {
            orderBy: null,
            orderDirection: 'ASC',
            search: null
        };
        userApi.getIndividuals()
            .then((response) => {
                if(response.status === 200) {
                    this.setState({individuals: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    getIndividuals = () => {
        userApi.getIndividuals(global.sortObj)
            .then((response) => {
                if(response.status === 200) {
                    this.setState({individuals: response.data});
                }
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    handleSearch = (search) => {
        global.sortObj.search = search;
        this.getIndividuals();
    }

    handleSort = () => {
        this.getIndividuals();
    }

    render() {
        return (
            <div className="main">
                <ForasHeroImage src={slide05} footer={true} handleSearch={this.handleSearch} />
                <ForasFilterIndividuals data={this.state.individuals} handleSort={this.handleSort} />
            </div>
        );
    }
}

export default IndividualList;