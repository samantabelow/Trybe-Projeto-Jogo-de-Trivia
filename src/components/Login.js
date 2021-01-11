import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
// import actions from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: '',
      email: '',
    };
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

  // handleClick() {
  //   const { userLogin } = this.props;
  //   const { email } = this.state;
  //   userLogin(email);
  //   const { userEmail } = this.props;
  //   console.log(userEmail);
  // }

  render() {
    const { name, email } = this.state;
    // const { userIsLogged } = this.props;
    // if (userIsLogged) return <Redirect to="/carteira" />;
    return (
      <div>
        <form>
          <label htmlFor="password">
            Nome
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Digite seu nome"
              value={ name }
              onChange={ this.handleInput }
              data-testid="input-player-name"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite o seu e-mail"
              value={ email }
              onChange={ this.handleInput }
              data-testid="input-gravatar-email"
            />
          </label>
          <button
            type="button"
            data-testid="btn-play"
            disabled={ !this.validateInputs() }
            // onClick={ this.handleClick }
          >
            Jogar
          </button>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   userIsLogged: state.user.logged,
//   userEmail: state.user.email,
// });

// const mapDispatchToProps = (dispatch) => ({
//   userLogin: (email) => dispatch(actions.login(email)),
// });

export default Login;
// export default connect(mapStateToProps, mapDispatchToProps)(Login);

// Login.propTypes = {
//   userLogin: PropTypes.func.isRequired,
//   userIsLogged: PropTypes.bool.isRequired,
//   userEmail: PropTypes.string.isRequired,
// };
