import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Question from './Question';
import { Link } from 'react-router-dom';
import actions from '../actions';
import Header from './Header';

class Feedback extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { resetScoreAction, resetQuestionAction } = this.props;
    resetScoreAction();
    resetQuestionAction();
  }

  render() {
    const { player: { assertions, score } } = JSON.parse(localStorage.getItem('state'));
    let message = '';
    const minimumScore = 3;
    if (assertions < minimumScore) {
      message = 'Podia ser melhor...';
    } else {
      message = 'Mandou bem!';
    }
    return (
      <div>
        <Header />
        <span data-testid="feedback-text">{ message }</span>
        <Link
          to="/"
          type="button"
          data-testid="btn-play-again"
          onClick={ this.handleClick }
        >
          <button type="button">
            Jogar novamente
          </button>
        </Link>
        <span data-testid="feedback-total-score">{ score }</span>
        <span data-testid="feedback-total-question">{ assertions }</span>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  resetQuestionAction: () => dispatch(actions.resetQuestion()),
  resetScoreAction: () => dispatch(actions.resetScore()),
});

export default connect(null, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  resetScoreAction: PropTypes.func.isRequired,
  resetQuestionAction: PropTypes.func.isRequired,
};
