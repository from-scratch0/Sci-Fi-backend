import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
    render() { 
        return ( 
            <div className="login-form">
                <h1>欢迎乘坐科幻电梯</h1>
                <UserForm />
            </div>
         );
    }
}
 
export default Login;

class UserForm extends Component {
    checkUsername = () => {}
    render() { 
        return ( 
            <Form>
                <Form.Item name="username"
                    rules={[
                        { validator: this.checkUsername }, 
                        { required: true, message: '请输入用户名'}]}>
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="请输入用户名" />
                </Form.Item>
                <Form.Item name="password"
                    rules={[ 
                        { required: true, message: '请输入密码'}]}>
                    <Input 
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="请输入密码" />
                </Form.Item>    
            </Form>
        );
    }
}
//const WrappedUserForm = Form.create()(UserForm);
 
