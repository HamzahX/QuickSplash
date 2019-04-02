import React, {Component} from 'react'

import Answer from './Answer';
import answer from '../Assets/images/answer.png';

class AnswerBox extends Component {
    render() {

        return (
            <div id='AnswerBox'>
                <Answer text={this.props.answer1}/>
                <Answer text={this.props.answer2}/>
            </div>
        );

    }
}

export default AnswerBox;
