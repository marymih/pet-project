import { Link } from 'react-router-dom';
import { useReducer } from 'react';

const Login = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case 'set':
        return action.payload;
      default:
        return state;
    }
  };

  const [username, dispatchUser] = useReducer(reducer, '');
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
          type="text"
          id="password"
          placeholder="Пароль"
          onChange={(e) =>
            dispatchPassword({ type: 'set', payload: e.target.value })
          }
          value={password}
          required
        />

        <button>Войти</button>

        <p>Хотите создать аккаунт?</p>
        <Link to="/register">
          <button>Зарегистрироваться</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
