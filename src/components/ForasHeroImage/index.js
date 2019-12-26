import React from 'react';
import { Form, Button, InputGroup, FormControl } from 'react-bootstrap';

import './foras-hero-image.scss';

// import slide01 from '../../assets/images/slide01.png';
// import slide02 from '../../assets/images/slide02.png';
// import slide03 from '../../assets/images/slide03.png';
import slide_footer from '../../assets/images/slide-footer.png';
import icon_search from '../../assets/icons/icon-search.png';

class ForasHeroImage extends React.Component {
    constructor(props) {
        super();
        this.state = {
            search: '',
        }
    }

    handleChangeInput = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name]: value});
    }

    handleKeyUp = (event) => {
        if(event.key === 'Enter') {
            this.handleSearch();
        }
    }

    handleSearch = () => {
        this.props.handleSearch(this.state.search);
    }
    
    render() {
        return (
            <div className="hero-img-container">
                <img
                    className="d-block w-100"
                    src={this.props.src}
                    alt="First slide"
                />
                <div className="search-form">
                    <InputGroup>
                        <FormControl 
                            type="text" 
                            placeholder="ابحث عن فرصة هنا" 
                            name="search" 
                            value={this.state.search} 
                            onChange={this.handleChangeInput}
                            onKeyUp={this.handleKeyUp}
                        />
                    </InputGroup>
                    <Button variant="orange" type="button" onClick={this.handleSearch}>
                        <img
                            className="d-block w-100"
                            src={icon_search}
                            alt="First slide"
                        />
                    </Button>
                </div>
                {this.props.footer && 
                    <img
                        className="d-block w-100 hero-image-footer"
                        src={slide_footer}
                        alt="slide footer"
                    />
                }
            </div>
        );
    }
}

export default ForasHeroImage;