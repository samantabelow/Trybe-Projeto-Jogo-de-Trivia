import React from 'react';
import PropTypes from 'prop-types';
// import actions from '../actions';

class Question extends React.Component {
  // constructor() {
  //   super();
  // }

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

export default Question;

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.shape(PropTypes
    .arrayOf(PropTypes.shape(PropTypes.string))).isRequired,
};
