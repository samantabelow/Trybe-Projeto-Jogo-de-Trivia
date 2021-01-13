import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../actions';

class Question extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { changeQuestion, questionNumber, history } = this.props;
    if (questionNumber < 4) {
      changeQuestion();
    }
    else {
      history.push('/feedback');
    }
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
        <button data-testid='btn-next' onClick={ this.handleClick }>Próxima</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  questionNumber: state.gamepage.currentQuestion,
});

const mapDispatchToProps = (dispatch) => ({
  changeQuestion: () => dispatch(actions.changeQuestionNumber()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);

Question.propTypes = {
  category: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.shape(PropTypes
    .arrayOf(PropTypes.shape(PropTypes.string))).isRequired,
  changeQuestion: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
