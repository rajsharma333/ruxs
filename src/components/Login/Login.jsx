import React from 'react';

import LoginForm from './LoginForm';
import PasswordExpire from './PasswordExpire';

import styles from './login.module.css';
import accentImage from '../../images/Premier-Login-Image.png';


class Login extends React.Component {
  render(){
    const passwordExpiresSoon = false;
    return (
      <div className="flex flexRow">
        <div className={styles.loginWrapper}>
          <main className={styles.login}>
            {!passwordExpiresSoon ? <LoginForm /> : <PasswordExpire/>}
          </main>
        </div>
        <img className={styles.loginAccent} src={accentImage} alt="City scene accent" />
      </div>
    )
  }
}

export default Login;




//import { withRouter } from 'react-router-dom';
//import axios from 'axios';
//import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
//import { connect } from 'react-redux';
//import premierLogo from '../images/Premier-logo.png';

//import Input from '../components/Form/Input/Input';
//import Select from '../components/Form/Input/Select/Select';
//import Button from '../components/Buttons/Button';
//import loginAction from '../actions/auth-actions';
{/* class Login extends React.Component {
 constructor(props) {
    super(props);
    const searchParams = new URLSearchParams(window.location.search);

    this.state = {
      Username: '',
      Password: '',
      // remember: false,
      groups: [],
      groupsLoading: true,
      Institution: searchParams.get('Inst') || 0,*
      InstSet: !!searchParams.get('Inst'),
      // Group: searchParams.get('Group') || '',
      GroupSet: !!searchParams.get('Group'),
      group: '',
      errorState: false,
      passwordExpiresSoon: false,
      // passwordExpirationDate: '',
      // daysUntilPasswordExpires: '',
      isLoading: false,
    };

    this.authenticate = this.authenticate.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.getGroups = this.getGroups.bind(this);
  }

  // TODO-ah: Move this out of componentDidMount() since it's getting called multiple times?
  componentDidMount() {
    this.getGroups();
  }

  authenticate = (username, password, group, institution) => {
    // console.log('group ', group);
    // debugger;
    const { login } = this.props;

    try {
      login({
        userId: username,
        password,
        group,
        institutionNum: institution,
      }).then(() => {
        this.authorize();
      });
    } catch (ex) {
      // console.log('error', ex);
    }
  };



  authorize = () => {
    this.props.authorize().then(() => {
      this.props.history.push({ pathname: '/newnav/landing' });
    });
  };

  getGroups = () => {
    const url = {
      development: '/groups.json',
      production: 'https://premieruix1.itint.com/NAV_NAV1650/api/groups',
    };

    axios({
      method: 'GET',
      url: url[process.env.NODE_ENV],
      headers: { 'X-Api-Version': '1.0' },
    })
      .then((response) => {
        const { groups } = response.data.data;
        if (process.env.NODE_ENV === 'development') {
          setTimeout(() => {
            this.setState({
              groups,
              groupsLoading: false,
            });
          }, 750);
        } else {
          this.setState({
            groups,
            groupsLoading: false,
            group: response.data.data.groups[0].id,
          });
        }
      })
      .catch((error) => {
        console.error('ERROR:', error.response);

        this.setState({ groupsLoading: false });
      });
    // this.setState({groups:{}})
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { Username, Password, group, Institution } = this.state;
    this.setState({ isLoading: true }, this.authenticate(Username, Password, group, Institution));
  };

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;

    this.setState({
      [name]: value,
      errorState: false,
    });
  }

  render() {
    const { groupsLoading, groups, group, GroupSet, passwordExpiresSoon, Institution, InstSet, isLoading, errorState, expirationDays, expirationDate } = this.state;

    const { history } = this.props;

    return (

    );
  }
}*/}

// const mapDispatchToProps = (dispatch) => ({ actions: bindActionCreators(AuthAction, dispatch) });

//const mapDispatchToProps = (dispatch) => ({ login: (event) => dispatch(loginAction(event)) });
