import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import actions from '../actions';

class GamePage extends React.Component {
  constructor() {
    super();
    this.fetchGame = this.fetchGame.bind(this);
    this.renderGame = this.renderGame.bind(this);
    // this.randomOptions = this.randomOptions.bind(this);
    this.state = {
      games: [],
    };
  }

  componentDidMount() {
    const { token } = this.props;
    // const recoveredToken = localStorage.getItem('token');
    console.log(token);
    this.fetchGame(token);
  }

  async fetchGame(token) {
    try {
      const fetchAPI = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      const gameInfo = await fetchAPI.json();
      this.setState({
        games: gameInfo.results,
      });
    } catch (error) {
      return error;
    }
  }

  // randomOptions(correctAnswer, incorrectAnswers) {
  //   return (
  //     <div>
  //       <button data-testid="correct-answer">{correctAnswer}</button>
  //       {incorrectAnswers.map((answer, index) => <button data-testid={`wrong-answer-${index}`}>{answer}</button>)}
  //     </div>)
  // }

  renderGame(game, index) {
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = game;
    return (
      <div>
        <p key={ `category${index}` } data-testid="question-text">{question}</p>
        <p key={ `question${index}` } data-testid="question-category">{category}</p>
        <button
          type="button"
          key={ `right${index}` }
          data-testid="correct-answer"
        >
          {correctAnswer}
        </button>
        {incorrectAnswers.map((answer, order) => (
          <button
            type="button"
            key={ `wrong${order}` }
            data-testid={ `wrong-answer-${order}` }
          >
            {answer}
          </button>))}
        {/* {randomOptions(correct_answer, incorrect_answers)} */}
      </div>
    );
  }

  render() {
    const { games } = this.state;
    return (
      <div>
        {games.map((game, index) => this.renderGame(game, index))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
});

// const mapDispatchToProps = (dispatch) => ({
//   userLogin: (email) => dispatch(actions.login(email)),
// });

export default connect(mapStateToProps)(GamePage);

GamePage.propTypes = {
  token: PropTypes.string.isRequired,
};
