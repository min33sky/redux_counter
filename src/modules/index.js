import { createAction, handleActions } from 'redux-actions';
import {Map, List} from 'immutable';

// 액션 타입
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// 액션 생성자
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // {index, color}

// 초기 상태를 정의
const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0
        })
    ])
});

// 리듀서 틀 만들기
// 액션타입에 접두사가 있기때문에 [액션타입]: 으로 설정한다.
// 파라미터의 이름은 payload로 통합되어있다.
export default handleActions({
    [CREATE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.push(
            Map({
                color: action.payload,
                number: 0
            })
        ));
    },
    [REMOVE]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.pop());
    },
    [INCREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') + 1)
        ));
    },
    [DECREMENT]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            action.payload,
            (counter) => counter.set('number', counter.get('number') - 1)
        ));
    },
    [SET_COLOR]: (state, action) => {
        const counters = state.get('counters');

        return state.set('counters', counters.update(
            // index와 color가 객체안에 들어있으므로
            action.payload.index,
            (counter) => counter.set('color', action.payload.color)
        ));
    }
}, initialState);