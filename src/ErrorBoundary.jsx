import React, { Component } from 'react';

// ErrorBoundary will catch the error and display the fallback UI
class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
    

    render() {
        if(this.state.hasError){
            return "Something went wrong"
        }
        return this.props.children
    }
}

export default ErrorBoundary;