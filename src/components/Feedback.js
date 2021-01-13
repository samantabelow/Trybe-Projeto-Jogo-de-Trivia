import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
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
    //     const { games, loading } = this.state;
    //     if (loading) {
    //       return <p>Loading...</p>;
    //     }
    //     const {
    //       category,
    //       question,
    //       correct_answer: correctAnswer,
    //       incorrect_answers: incorrectAnswers,
    //     } = games[0];
    return (
      <div>
        <Header />
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   token: state.login.token,
// });

// // const mapDispatchToProps = (dispatch) => ({
// //   userLogin: (email) => dispatch(actions.login(email)),
// // });
export default Feedback;
// export default connect(mapStateToProps)(GamePage);

// GamePage.propTypes = {
//   token: PropTypes.string.isRequired,
// };
