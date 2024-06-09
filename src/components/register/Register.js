import {Link} from 'react-router-dom';
import {useState} from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
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
          type="e-mail"
          id='email'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required />

        <input
          type="text"
          id="password"
          placeholder='Пароль'
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required />

        <button>Зарегистрироваться</button>

        <p>Уже есть аккаунт?</p>
        <Link to="/"><button>Войти</button></Link>
      </form>
    </div>
  );
};

export default Register;
