import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';

class Question extends React.Component {
  constructor() {
    super();
    this.handleCorrectAnswer = this.handleCorrectAnswer.bind(this);
  }

  handleCorrectAnswer() {
    const { changeScoreAction } = this.props;
    changeScoreAction();
  }

  render() {
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
          data-testid="correct-answer"
          onClick={ this.handleCorrectAnswer }
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
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeScoreAction: () => dispatch(actions.changeScore()),
});

export default connect(null, mapDispatchToProps)(Question);

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.shape(PropTypes
    .arrayOf(PropTypes.shape(PropTypes.string))).isRequired,
  changeScoreAction: PropTypes.func.isRequired,
};
