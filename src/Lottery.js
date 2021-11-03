import React, {Component} from 'react';
import Ball from './Ball';
import './Lottery.css'

class Lottery extends Component {
    constructor(props) {
        super(props);
        this.state = { nums : Array.from({length: this.props.numBalls}) };
        this.generate = this.generate.bind(this);
    }
    generate() {
        this.setState(curSt => ({
            nums: curSt.nums.map(
                n => Math.floor(Math.random() * this.props.max) + 1
            )
        }));
    }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.generate}>Play the Lotto!</button>
            </section>
        );
    }
}

export default Lottery;