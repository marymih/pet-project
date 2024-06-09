import {Link} from 'react-router-dom';
import {useState} from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='form-wrapper'>
      <form className='form'>
        <input
          type="text"
          id='username'
          placeholder='Логин'
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          required />

        <input
          type="text"
          id="password"
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required />

        <button>Войти</button>

        <p>Хотите создать аккаунт?</p>
        <Link to="/register"><button>Зарегистрироваться</button></Link>
      </form>
    </div>
  );
};

export default Login;
