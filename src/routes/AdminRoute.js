import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// API
import session from '../services/session.service';

// --- *** Admin Panel *** --- //
import AdminLoginForm from '../components/AdminLoginForm';
import AdminSideBar from '../components/layout/admin/AdminSideBar';
import AdminTopNavBar from '../components/layout/admin/AdminTopNavBar';
// Individuals Management
import IndividualsMana from '../views/admin/IndividualsMana';
// Corporates Management
import CorporatesMana from '../views/admin/CorporatesMana';
// Jobs Management
import JobsMana from '../views/admin/JobsMana';
// Notification Management
import NotificationsMana from '../views/admin/NotificationsMana';
// Message Management
import MessagesMana from '../views/admin/MessagesMana';
// Contact Management
import ContactsMana from '../views/admin/ContactsMana';

class AdminRoute extends React.Component {
  constructor(props) {
    super();
    this.state = {
        user: {},
    }
  }
  componentDidMount() {
        const user = session.get('foras-user');
        this.setState({user: user});
  }

  render() {
    return (
        <Switch>
            <Route path="/admin">
                {(this.state.user && this.state.user.role === 'admin') ? <LoggedInAdmin /> : <AdminLogin />}
            </Route>
        </Switch>
    );
  }
}

export default AdminRoute;

// ================== Admin Panel Classes ================= //

function AdminLogin() {
  return (
    <AdminLoginForm />
  );
}

function LoggedInAdmin() {
  return (
    <div className="admin-layout">
      <div className="side-bar">
        <AdminSideBar />
      </div>
      <div className="content-bar">
        <div className="top-nav-bar">
          <AdminTopNavBar />
        </div>
        <div className="main-content">
          <Switch>
            <Route path="/admin/login">
              <AdminLogin />
            </Route>
            <Route exact path="/admin">
              <Redirect to="/admin/individuals" />
            </Route>
            <Route path="/admin/individuals">
              <IndividualsMana />
            </Route>
            <Route path="/admin/corporates">
              <CorporatesMana />
            </Route>
            <Route path="/admin/jobs">
              <JobsMana />
            </Route>
            <Route path="/admin/notifications">
              <NotificationsMana />
            </Route>
            <Route path="/admin/messages">
              <MessagesMana />
            </Route>
            <Route path="/admin/contacts">
              <ContactsMana />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}