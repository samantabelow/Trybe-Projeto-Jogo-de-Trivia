import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';
import '../App.css';
import { disableOptions } from '../actions/gamepage';

class Question extends React.Component {
  constructor() {
    super();
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }

  // componentDidMount() {
  //   const oneSecond = 1000;
  //   const { startTimer, resetTimer, disableOptions} = this.props;
  //   const interval = setInterval(() => {
  //     if (this.props.timer > 0) {
  //       startTimer();
  //     }
  //     else {
  //       clearInterval(interval);
  //       resetTimer();
  //       disableOptions();
  //     }
  //   }, oneSecond);
  // }

  handleCorrectAnswer() {
    const { changeScoreAction, changeButtonStyle } = this.props;
    changeScoreAction();
    changeButtonStyle();
  }

  handleIncorrectAnswer() {
    const { changeButtonStyle } = this.props;
    changeButtonStyle();
  }

  render() {
    const { rightClass, wrongClass, timer, optionsDisabled } = this.props;
    const {
      category,
      question,
      correctAnswer,
      incorrectAnswers,
    } = this.props;
    const index = 0;
    return (
      <div>
        <h2>{timer}</h2>
        <p key={ `question${index}` } data-testid="question-category">{category}</p>
        <p key={ `category${index}` } data-testid="question-text">{question}</p>
        <button
          type="button"
          key={ `right${index}` }
          className={ rightClass }
          disabled={ optionsDisabled }
          data-testid="correct-answer"
          onClick={ this.handleCorrectAnswer }
        >
          {correctAnswer}
        </button>
        {incorrectAnswers.map((answer, order) => (
          <button
            type="button"
            key={ `wrong${order}` }
            className={ wrongClass }
            disabled={ optionsDisabled }
            data-testid={ `wrong-answer-${order}` }
            onClick={ this.handleIncorrectAnswer }
          >
            {answer}
          </button>))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rightClass: state.gamepage.rightClass,
  wrongClass: state.gamepage.wrongClass,
  timer: state.gamepage.time,
  optionsDisabled: state.gamepage.optionsDisabled,
});

const mapDispatchToProps = (dispatch) => ({
  changeScoreAction: () => dispatch(actions.changeScore()),
  changeButtonStyle: () => dispatch(actions.changeButtonStyle()),
  startTimer: () => dispatch(actions.startTimer()),
  resetTimer: () => dispatch(actions.resetTimer()),
  disableOptions: () => dispatch(actions.disableOptions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.shape(PropTypes
    .arrayOf(PropTypes.shape(PropTypes.string))).isRequired,
  changeScoreAction: PropTypes.func.isRequired,
  changeButtonStyle: PropTypes.func.isRequired,
  rightClass: PropTypes.string.isRequired,
  wrongClass: PropTypes.string.isRequired,
};
