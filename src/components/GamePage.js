import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Question from './Question';
import actions from '../actions';
import Header from './Header';

class GamePage extends React.Component {
  constructor() {
    super();
    this.fetchGame = this.fetchGame.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.randomOptions = this.randomOptions.bind(this);
    this.state = {
      games: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { token } = this.props;
    // const recoveredToken = localStorage.getItem('token');
    this.fetchGame(token);
  }

  handleClick() {
    const { changeQuestion, questionNumber, history, resetClasses, resetTimer } = this.props;
    const maxQuestionNumber = 4;
    resetClasses();
    resetTimer();
    if (questionNumber < maxQuestionNumber) {
      changeQuestion();
    } else {
      history.push('/feedback');
    }
  }

  async fetchGame(token) {
    try {
      const fetchAPI = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
      const gameInfo = await fetchAPI.json();
      console.log(gameInfo);
      this.setState({
        games: gameInfo.results,
        loading: false,
      });
    } catch (error) {
      return error;
    }
  }

  render() {
    const { games, loading } = this.state;
    const { questionNumber } = this.props;
    if (loading) {
      return <p>Loading...</p>;
    }
    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = games[questionNumber];
    return (
      <div>
        <Header />
        <Question
          category={ category }
          question={ question }
          correctAnswer={ correctAnswer }
          incorrectAnswers={ incorrectAnswers }
        />
        <button
          type="button"
          data-testid="btn-next"
          onClick={ this.handleClick }
        >
          Próxima
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.login.token,
  questionNumber: state.gamepage.currentQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuestion: () => dispatch(actions.changeQuestionNumber()),
  resetClasses: () => dispatch(actions.resetClasses()),
  resetTimer: () => dispatch(actions.resetTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);

GamePage.propTypes = {
  token: PropTypes.string.isRequired,
  changeQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  questionNumber: PropTypes.number.isRequired,
  resetClasses: PropTypes.func.isRequired,
};
