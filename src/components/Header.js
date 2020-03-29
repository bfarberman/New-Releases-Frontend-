import React, { Component } from "react"

class Header extends Component {
    render() {
        return (
            <header>
                <h1>Music To-Do List</h1>
                <h2>Click On A New Release to Add It To Today's Listening</h2>
                <h2>Once You've Listened, Click On The Album To Remove It From Your List</h2>
            </header>
        )
    }
}

export default Header 