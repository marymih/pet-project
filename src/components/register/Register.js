import React from 'react';

const Register = () => {
  return (
    <div className='form-wrapper'>
      <form className='form'>
        {/* <label htmlFor="username">
          Логин:
        </label> */}
        <input
          type="text"
          id='username'
          placeholder='Логин'
          required />

        {/* <label htmlFor="password">
          Пароль:
        </label> */}
        <input
          type="text"
          id="password"
          placeholder='Пароль'
          required />

        <button>Войти</button>

        <p>Хотите создать аккаунт?</p>
        <button>Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default Register;
