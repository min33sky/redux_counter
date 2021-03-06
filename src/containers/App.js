import React, { Component } from 'react';
import CounterListContainer from './CounterListContainer';
import Buttons from '../components/Buttons';

import { connect } from 'react-redux';
import * as actions from '../modules';

import {getRandomColor} from '../utils';

class App extends Component {

    render() {
        const { onCreate, onRemove } = this.props;

        return (
            <div className="App">
                <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
                <CounterListContainer />

            </div>
        );
    }
}

// 액션 함수 준비
const mapDispatchToProps = (dispatch) => ({
    onCreate: () => dispatch(actions.create(getRandomColor())),
    onRemove: (index) => dispatch(actions.remove(index))
});

// 리덕스에 연결시키고 내보낸다.
export default connect(null, mapDispatchToProps)(App);