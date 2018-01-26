// import Counter from '../components/Counter';
// import * as actions from '../actions';
// import { connect } from 'react-redux';
// import { getRandomColor } from '../utils';

// /**
//  * 컴포넌트에 연결시킬 상태와 액션함수를 정의한다.
//  */

// // store 안의 state 값을 props로 연결해준다.
// const mapStateToProps = (state) => ({
//     color: state.colorData.color,
//     number: state.numberData.number
// });

// /**
//  * 액션 생성자를 사용하여 액션을 생성하고,
//  * 해당 액션을 dispatch하는 함수를 만든 후, 이를 props로 연결해준다.
//  */
// const mapDispatchToProps = (dispatch) => ({
//     onIncrement: () => dispatch(actions.increment()),
//     onDecrement: () => dispatch(actions.decrement()),
//     onSetColor: () => {
//         const color = getRandomColor();
//         dispatch(actions.setColor(color));
//     }
// })

// /**
//  * Counter 컴포넌트의 컨테이너 컴포넌트
//  * Counter 컴포넌트를 어플리케이션의 데이터 레이어와 묶는 역할을 한다.
//  */

// const CounterContainer = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(Counter);

// export default CounterContainer;