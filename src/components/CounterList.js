import React from 'react';
import Counter from './Counter';
import PropTypes from 'prop-types';
import './CounterList.css';
import { List } from 'immutable';

const CounterList = ({counters, onIncrement, onDecrement, onSetColor}) => {

    /**
     * color와 number 각각 설정 대신 {...counter}로 객체를 풀어서
     * 한꺼버에 전달이 가능하다.
     */
    const counterList = counters.map((counter, i) => (
        <Counter
            key={i}
            index={i}
            {...counter.toJS()}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onSetColor={onSetColor}
        />
    ));

    return (
        <div className="CounterList" >
            {counterList}
        </div>
    );
};

CounterList.propTypes = {
    counters: PropTypes.instanceOf(List),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

CounterList.defaultProps = {
    counters: [],
    onIncrement: () => console.warn("onIncrement not defined"),
    onDecrement: () => console.warn("onDecrement not defined"),
    onSetColor: () => console.warn("onSetColor not defined")
}

export default CounterList;