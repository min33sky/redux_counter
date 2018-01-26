/**
 * 액션 생성자 만들기 (action creators)
 * : () => ({}) 은, function(){ return {} }와 동일한 의미이다.
 */

import * as types from './ActionTypes';

export const increment = (index) => ({
    type: types.INCREMENT,
    index
});

export const decrement = (index) => ({
    type: types.DECREMENT,
    index
});

export const setColor = ({color, index}) => ({
    type: types.SET_COLOR,
    color,
    index
});

export const create = (color) => ({
    type: types.CREATE,
    color
});

export const remove = () => ({
    type: types.REMOVE
});

