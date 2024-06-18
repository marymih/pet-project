import { Link } from 'react-router-dom';
import { useReducer } from 'react';

const Register = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload;
      default:
        return state;
    }
  };
  const [username, dispatchUser] = useReducer(reducer, '');
  const [email, dispatchEmail] = useReducer(reducer, '');
  const [password, dispatchPassword] = useReducer(reducer, '');

  return (
    <div className="form-wrapper">
      <form className="form">
        <input
          type="text"
          id="username"
          placeholder="Логин"
          onChange={(e) =>
            dispatchUser({ type: 'set', payload: e.target.value })
          }
          value={username}
          required
        />

        <input
          type="e-mail"
          id="email"
          placeholder="E-mail"
          onChange={(e) =>
            dispatchEmail({ type: 'set', payload: e.target.value })
          }
          value={email}
          required
        />

        <input
          type="text"
          id="password"
          placeholder="Пароль"
          onChange={(e) =>
            dispatchPassword({ type: 'set', payload: e.target.value })
          }
          value={password}
          required
        />

        <button>Зарегистрироваться</button>

        <p>Уже есть аккаунт?</p>
        <Link to="/">
          <button>Войти</button>
        </Link>
      </form>
    </div>
  );
};

export default Register;
