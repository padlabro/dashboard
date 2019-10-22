import React from 'react'
import './UserForm.scss'
import cn from 'classnames'
const UserForm = (props)=>{
	const {edit,handleInput,users,id,data,error}=props
	if(edit){
		return (<><div>
			<label htmlFor="name">Имя:</label>
			<input
			  key="name"
			  name="name"
			  onChange={handleInput}
			  placeholder={"Иван"}
			  value={data.name}
			/>
		  </div>
		  <div>
			<label htmlFor="surname">Фамилия:</label>
			<input
			  key="surname"
			  name="surname"
			  onChange={handleInput}
			  placeholder={"Иванов"}
			  value={data.surname}
			/>
		  </div>
		  <div>
			<label htmlFor="username">Логин:</label>
			<input  className={cn({ error: error })}
			  key="username"
			  name="username"
			  onChange={handleInput}
			  placeholder={"Mazay"}
			  value={data.username}
			/>
		  </div>
		  <div>
			<label htmlFor="email">E-mail:</label>
			<input
			  key="email"
			  name="email"
			  onChange={handleInput}
			  placeholder={"mazay123@mail.ru"}
			  value={data.email}
			/>
		  </div>
		  <div className="form__textarea">
			<label htmlFor="about">О себе:</label>
			<textarea
			  key="about"
			  name="about"
			  type="text"
			  value={data.about}
			  onChange={handleInput}
			  className="form-about"
			  placeholder={""}
			/>
		  </div></>)
	}else{
		return (
			<>
			<div><span>Имя:</span>{users[id].name}</div>
			<div><span>Фамилия:</span>{users[id].surname}</div>
			<div><span>Логин:</span>{users[id].username}</div>
			<div><span>E-mail:</span>{users[id].email}</div>
			<div className="about"><span>О себе:</span>{users[id].about}</div>
			</>
		)
	}
}
export default UserForm