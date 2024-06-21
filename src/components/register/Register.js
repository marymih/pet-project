import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

const Register = () => {
  const navigate = useNavigate();

  const initialState = {
    username: '',
    email: '',
    password: '',
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'setUserName':
        return { ...state, username: action.payload };
      case 'setEmail':
        return { ...state, email: action.payload };
      case 'setPassword':
        return { ...state, password: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="form-wrapper">
      <form className="form">
        <input
          type="text"
          id="username"
          placeholder="Логин"
          onChange={(e) =>
            dispatch({ type: 'setUserName', payload: e.target.value })
          }
          value={state.username}
          required
        />

        <input
          type="e-mail"
          id="email"
          placeholder="E-mail"
          onChange={(e) =>
            dispatch({ type: 'setEmail', payload: e.target.value })
          }
          value={state.email}
          required
        />

        <input
          type="text"
          id="password"
          placeholder="Пароль"
          onChange={(e) =>
            dispatch({ type: 'setPassword', payload: e.target.value })
          }
          value={state.password}
          required
        />

        <button>Зарегистрироваться</button>

        <p>Уже есть аккаунт?</p>

        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          Войти
        </button>
      </form>
    </div>
  );
};

export default Register;
