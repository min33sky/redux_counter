import CounterList from '../components/CounterList';
import * as actions from '../modules';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props로 연결한다.
const mapStateToProps = (state) => ({
    counters: state.get('counters')
})

/*
    액션 생성자를 사용하여 액션을 생성하고,
    해당 액션을 dispatch하는 함수를 만든 후 props로 연결
*/

const mapDispatchToProps = (dispatch) => ({
    onIncrement: (index) => dispatch(actions.increment(index)),
    onDecrement: (index) => dispatch(actions.decrement(index)),
    onSetColor: (index) => {
        const color = getRandomColor();
        dispatch(actions.setColor({index, color}));
    }
})

// 데이터와 함수들이 props로 붙은 컴포넌트 생성
const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterList);

export default CounterListContainer;