import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';
import '../App.css';

class Question extends React.Component {
  constructor() {
    super();
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
    this.handleIncorrectAnswer = this.handleIncorrectAnswer.bind(this);
  }

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
    const { rightClass, wrongClass } = this.props;
    const {
      category,
      question,
      correctAnswer,
      incorrectAnswers,
    } = this.props;
    const index = 0;
    return (
      <div>
        <p key={ `question${index}` } data-testid="question-category">{category}</p>
        <p key={ `category${index}` } data-testid="question-text">{question}</p>
        <button
          type="button"
          key={ `right${index}` }
          className={ rightClass }
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
});

const mapDispatchToProps = (dispatch) => ({
  changeScoreAction: () => dispatch(actions.changeScore()),
  changeButtonStyle: () => dispatch(actions.changeButtonStyle()),
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
