import React, { Component } from 'react'

export default class DemoState extends Component {
    //State: là thuộc tính có sẵn của component => dùng để quản lý nguồn dữ liệu thay đổi trên giao diện khi người dùng thao tác(click,change,blur...)
    state = { isLogin:false }

    userName = 'Thịnh';

    renderContent = () => {
        if (this.state.isLogin) {
            return <p>Hello! {this.userName}</p>
        }
        return <button onClick={() => this.handleLogin()} className="btn btn-success">Đăng nhập</button>
    }

    handleLogin = () => {
        //Không được thay đổi state trực tiếp mà phải thông qua phương thức this.setState
        //setState(): là phương thức có sẵn của lớp đối tượng component=> dùng để thay đổi giá trị trong this.state đồng thời gọi lại hàm render
        // this.state.isLogin = true;
        // console.log('isLogin', this.state.isLogin);
        
        this.setState({
            isLogin:true
        });
    }

    render() {
        return (
            <div className="container">
                <h3>If Else React</h3>
                {/* {this.isLogin?<p>Hello! {this.userName}</p>:<button className="btn btn-success">Đăng nhập</button>} */}
                {this.renderContent()}
            </div>
        )
    }
}
