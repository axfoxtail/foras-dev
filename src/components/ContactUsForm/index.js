import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './contact-us-form.scss';
import session from '../../services/session.service';
import helper from '../../services/helper.service';

class ContactUsForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
        }
    }

    componentDidMount() {
        const user = session.get('foras-user');
        if (user) {
            this.setState({
                name: user.name,
                email: user.email
            });
        }
    }

    handleInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name] : value});
    }

    handleSubmit = () => {
        
    }

    render() {
        return (
            <Form className="contact-form">
                <h2 className="text-center mb-4">تواصل معنا</h2>
                <Form.Group controlId="formBasicName">
                    <Form.Control type="text" placeholder="Name" 
                        name="name" 
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" 
                        name="email" 
                        value={this.state.email}
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicSubject">
                    <Form.Control type="text" placeholder="Subject" 
                        name="subject" 
                        value={this.state.subject}
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicMessage">
                    <Form.Control as="textarea" placeholder="Message" rows={7} 
                        name="message" 
                        value={this.state.message}
                        onChange={this.handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="button" className="btn-contact-form-submit" onClick={this.handleSubmit}>
                    Submit
                </Button>
            </Form>
        );
    }
}

export default ContactUsForm;