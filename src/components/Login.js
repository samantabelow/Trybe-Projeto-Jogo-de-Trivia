import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleClick() {
    const { history, tokenAction, token, gravatar, nameAction, emailAction } = this.props;
    const { name, email } = this.state;
    tokenAction();
    nameAction(name);
    emailAction(email);
    gravatar(emailAction);
    localStorage.setItem('token', token);
    history.push('/gamepage');
  }

  handleInput(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  validateInputs() {
    const { name, email } = this.state;
    return name && email;
  }
  // componentDidMount() {
  //   const storedToken = localStorage.getItem('token');
  // }

  render() {
    const { name, email } = this.state;
    return (
      <div >
        <form className="login">
          <label htmlFor="password" className="form-label">
            Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              value={ name }
              onChange={ this.handleInput }
              data-testid="input-player-name"
              className="form-control"
            />
          </label>
          <label htmlFor="email" className="form-label">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail"
              value={ email }
              onChange={ this.handleInput }
              data-testid="input-gravatar-email"
              className="form-control"
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ !this.validateInputs() }
            onClick={ this.handleClick }
            class="btn btn-dark"
          >
            Jogar
          </button>
          <Link
            to="/settings"
            type="button"
            data-testid="btn-settings"
          >
            <button type="button" class="btn btn-dark">
              <FontAwesomeIcon icon={faCog} />
              Configuração
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
});

const mapDispatchToProps = (dispatch) => ({
  tokenAction: () => dispatch(actions.fetchToken()),
  gravatar: (email) => dispatch(actions.fetchGravatar(email)),
  nameAction: (name) => dispatch(actions.getName(name)),
  emailAction: (email) => dispatch(actions.getEmail(email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  tokenAction: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  gravatar: PropTypes.func.isRequired,
  nameAction: PropTypes.func.isRequired,
  emailAction: PropTypes.func.isRequired,
};
