import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "Aniket"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Aniket"
            })
        }, 2000)
    }

    render() {
        console.log("Parent Comp")
        return <>
            <div>Parent Component</div>
            {/* <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/> */}

            <MemoComp name={this.state.name}/>
        </>
    }
}

export default ParentComp;