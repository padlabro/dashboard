import React, { Component } from "react";
import "./Authorization.scss";
import classNames from 'classnames'
export default class Authorization extends Component {

	componentDidMount(){
		console.log(localStorage.getItem('teest'))
	}
	
  render() {
    return (
      <div className={classNames('authorization')}>
        <form>
          <label>Введите имя пользователя и пароль</label>
          <input onChange={this.props.handleChangeLogin} placeholder={"Имя"} />
          <input onChange={this.props.handleChangePassword} placeholder={"Пароль"} />
		  <button onClick={this.props.logIn}>Вход</button>
        </form>
      </div>
    );
  }
}
