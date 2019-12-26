import React from 'react';
import './map.scss';
import ForasHeroImage from '../../components/ForasHeroImage';
import ForasOpportunityMap from '../../components/ForasOpportunityMap';
import ForasFilterJobs from '../../components/ForasFilterJobs';
import ForasFilterIndividuals from '../../components/ForasFilterIndividuals';
import session from '../../services/session.service';
import userApi from '../../services/user.service';

const hero_img = require('../../assets/images/map-hero.png');
const img_map_footer = require('../../assets/images/map-footer.png');

class Map extends React.Component {
    constructor(props) {
        super();
        this.state = {
            jobs: [],
            individuals: [],
            userRole: null,
        }
    }

    componentDidMount() {
        global.sortObj = {
            orderBy: null,
            orderDirection: 'ASC',
            search: null
        };
        const user = session.get('foras-user');
        if(user) {
            this.setState({userRole: user.role});
        }
        this.getJobs();
        this.getIndividuals();
    }

    getJobs = () => {
        
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
        this.getJobs();
    }

    handleSort = () => {
        if(this.userRole === 'individual') {
            this.getJobs();
        } else {
            this.getIndividuals();
        }
    }

    render() {
        return (
            <div className="main">
                <ForasHeroImage src={hero_img} footer={false} handleSearch={this.handleSearch} />
                <ForasOpportunityMap 
                    data={this.state.userRole && this.state.userRole === 'individual' ? this.state.jobs : this.state.individuals} 
                    userRole={this.state.userRole} />
                {/* <ForasOpportunityMap /> */}
                {/* <img src={img_map_footer} className="map-footer" alt="map-footer" /> */}
                {this.state.userRole && this.state.userRole === 'individual' 
                    ? <ForasFilterJobs data={this.state.jobs} handleSort={this.handleSort} /> 
                    : <ForasFilterIndividuals data={this.state.individuals} handleSort={this.handleSort} />}
            </div>
        );
    }
}

export default Map;