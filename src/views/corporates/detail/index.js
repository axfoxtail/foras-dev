import React from 'react';

import './corporate-detail.scss';
import CorporateDetailHeader from '../../../components/CorporateDetailHeader';
import CorporateDetailBody from '../../../components/CorporateDetailBody';
import userApi from '../../../services/user.service';

class CorporateDetail extends React.Component {
    constructor(props) {
        super();
        this.state = {
            individual: {},
            reviews: [],
        }
    }

    componentDidMount() {
        const param = window.location.href.split('/corporates/')[1];
        userApi.corporateDetail(param)
            .then((response) => {
                if(response.status !== 200 || !response.data) {
                    window.location.href='/corporates';
                }
                this.setState({
                    individual: response.data.individual,
                    reviews: response.data.reviews
                });
            })
            .catch((error) => {
                console.log('err: ', error);
            })
    }

    render() {
        return (
            <div className="main bg-detail-header">
                <CorporateDetailHeader data={this.state.individual} />
                <CorporateDetailBody data={this.state.individual} reviews={this.state.reviews} />
            </div>
        );
    }
}

export default CorporateDetail;