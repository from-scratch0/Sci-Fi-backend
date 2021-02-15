import React, { Component } from 'react';
import { NavLink, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button, message } from 'antd';
import user from '../../service/user';

class Home extends Component {
  state = { username: '' }
  UNSAFE_componentWillMount() {
    let username = sessionStorage.getItem('username');
    this.setState({ username });
  }
  logout = () => {
    user.signout().then(data => {
      if(data.code == 0) {
        sessionStorage.removeItem('username');
        this.props.history.push('/login');
      } else {
        message.error(data.error);
      }
    })
  }
  render() {
    return (
      <div className="Home">
        {
          !sessionStorage.getItem('username') ? <NavLink className="nav-link" to="/login">
          <Button>登录</Button>
        </NavLink> : <Button onClick={this.logout}>{this.state.username}退出</Button>
        }
        
        
      </div>
    );
  }
}

export default Home;
