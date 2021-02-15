import React, { Component } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import service from '../../service/user';

class Login extends Component {
    handleFinish = (isSignUp, user) => {
        service[isSignUp ? 'signup' : 'signin'](user).then(res => {
            if(res.code == 0) {
                if(!isSignUp) {
                    sessionStorage.setItem('username', res.data.user.username);
                }

                this.props.history.push('/');
            } else {
                message.error(res.error);
            }
        })
    }
    render() { 
        return ( 
            <div className="login-form">
                <h1>欢迎乘坐科幻电梯</h1>
                <UserForm onFinish={this.handleFinish} />
            </div>
         );
    }
}
 
export default Login;

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { isSignUp: false };
    }

    onFinish = (values) => {
        // this.props.onFinish(values);
        // e.preventDefault();
        console.log('Received values of form: ', values);
        this.props.onFinish(this.state.isSignUp, values);
    };

    validateMessages = {
        required: '该项不能为空!',
        types: {
          email: 'Not a valid email!',
        },
      };

    render() {
        return ( 
            <Form onFinish={this.onFinish} validateMessages={this.validateMessages}>
                <Form.Item name="username" 
                    rules={[
                        // { validator: checkUsername }, 
                        { required: true, message: '请输入用户名'}]}
                    //validateStatus={value.validateStatus}
                    //help={value.errorMsg || tips}
                    >
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" style={{color: 'rgba(0,0,0,.25)'}}/>} 
                        placeholder="请输入用户名" 
                        //onChange={onNumberChange} 
                        />
                </Form.Item>
    
                <Form.Item name="password"
                    rules={[ 
                        { required: true }]}>
                    <Input 
                        prefix={<LockOutlined className="site-form-item-icon" style={{color: 'rgba(0,0,0,.25)'}}/>}
                        placeholder="请输入密码" />
                </Form.Item>
                {
                    this.state.isSignUp && <Form.Item name="email"
                        rules={[ 
                            { required: true, type: 'email' }]}>
                        <Input 
                            prefix={<MailOutlined className="site-form-item-icon" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            placeholder="请输入邮箱" />
                    </Form.Item>
                }
                
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {this.state.isSignUp ? '注册' : '登录'}
                    </Button>
                    <a onClick={() => this.setState({ isSignUp: !this.state.isSignUp })}>
                        {this.state.isSignUp ? '已有账号，直接登录' : '立即注册'}
                    </a>
                </Form.Item>    
            </Form>
        );
    }
}

//const WrappedUserForm = Form.create()(UserForm);
 
