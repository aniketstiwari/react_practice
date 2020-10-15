import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            topic: 'react'
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }

    handleLanguange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleForm = (event) => {
        alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
        event.preventDefault()
    }

    render() {
        const {username, comment, topic} = this.state;
        return(
            <>
                <form onSubmit={this.handleForm}>
                    <div>
                      <label>Username</label>
                      <input type="text" value={username} 
                    onChange={this.handleUsername} />
                    </div>
                    <div>
                      <label>Comments</label>
                      <input type="text" value={comment} 
                    onChange={this.handleComment} />
                    </div>
                    <div>
                        <label>Language</label>
                        <select value={topic} onChange={this.handleLanguange}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default Form;