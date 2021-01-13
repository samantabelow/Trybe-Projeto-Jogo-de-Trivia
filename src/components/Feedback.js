import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Question from './Question';
// // import actions from '../actions';
import Header from './Header';

class Feedback extends React.Component {
//   constructor() {
//     super();
//     this.fetchGame = this.fetchGame.bind(this);
//     // this.randomOptions = this.randomOptions.bind(this);
//     this.state = {
//       games: [],
//       loading: true,
//     };
//   }

  //   componentDidMount() {
  //     const { token } = this.props;
  //     // const recoveredToken = localStorage.getItem('token');
  //     this.fetchGame(token);
  //   }

  //   async fetchGame(token) {
  //     try {
  //       const fetchAPI = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
  //       const gameInfo = await fetchAPI.json();
  //       console.log(gameInfo);
  //       this.setState({
  //         games: gameInfo.results,
  //         loading: false,
  //       });
  //     } catch (error) {
  //       return error;
  //     }
  //   }

  render() {
    const { score } = this.props;
    let message = '';
    const minimumScore = 3;
    if (score < minimumScore) {
      message = 'Podia ser melhor...';
    } else {
      message = 'Mandou bem!';
    }
    return (
      <div>
        <Header />
        <p data-testid="feedback-text">{ message }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  score: state.gamepage.score,
});

// // const mapDispatchToProps = (dispatch) => ({
// //   userLogin: (email) => dispatch(actions.login(email)),
// // });

export default connect(mapStateToProps)(Feedback);

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
};
