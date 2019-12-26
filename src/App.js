import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import ReactNotifications from 'react-notifications-component';

/**************************************/
/*************** Layouts **************/
/**************************************/
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

/**************************************/ 
/************** Routes ****************/ 
/**************************************/ 
import WebRoute from './routes/WebRoute';

/**************************************/
/**************** API *****************/
/**************************************/
import session from './services/session.service';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isAdminPath: false,
    }
  }
  componentDidMount() {
    const isAdminPath = window.location.href.includes('admin');
    this.setState({isAdminPath: isAdminPath});
  }

  render() {
    return (
      <Router>
        <div>
          <ReactNotifications />
          <Header props={this.props} />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <WebRoute />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;