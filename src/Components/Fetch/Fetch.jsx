import React, {Component} from 'react'
import FetchDisplay from './FetchDisplay/FetchDisplay'

export default class Fetch extends Component {
    constructor(props){
        super(props)
        this.state = {
            img: ''
        }
    }
    componentWillMount(){
        console.log('I am about to say hello');
    }
    componentDidMount(){
        console.log('component mounted');
        fetch('https://random.dog/woof.json')
        .then(res=>res.json())
        .then(json => this.setState({
            img: json.url
        }))

    }

    render(){
        return(
            <div>
                <h1>Display Random Image</h1>
                <FetchDisplay url={this.state.img}/>
            </div>
        )
    }
    

}