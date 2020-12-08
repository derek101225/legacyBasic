import React, {Component} from 'react';
import CounterDisplay from './CounterDisplay/CounterDisplay'

/**
 * Basic Lifecycle of REact component:
 * 1. Creation
 * 2. Mounted
 * 3. Unmounted
 * 4. Destroy
 */

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

     increment = () => {
        this.setState({
            count: (this.state.count++)
        })
    }

     decrement = () => {
        this.setState({
            count: (this.state.count--)
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay />
            </div>
        )
    }
}