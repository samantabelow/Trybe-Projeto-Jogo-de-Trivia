import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';

class Timer extends React.Component {
  constructor() {
    super();
    // this.stopTimer = this.stopTimer.bind(this);
    this.state = {
      stop: true,
    }
  }
  componentDidMount() {
    const { startTimer, resetTimer} = this.props;
    const interval = setInterval(() => {
      if (this.props.timer > 0) {
        startTimer();
      }
      else {
        clearInterval(interval);
        resetTimer();
      }
    }, 1000);
  }


  render() {
    const {timer} = this.props;
    return (
      <div>
        {timer}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  timer: state.gamepage.time,
});


const mapDispatchToProps = (dispatch) => ({
  startTimer: () => dispatch(actions.startTimer()),
  resetTimer: () => dispatch(actions.resetTimer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Timer);