import React, { Component } from "react"
import Album from "../components/Album"

class Queue extends Component {

    render() {
        return (
            <div className="listening-queue">
                <h2></h2>
                    {
                    this.props.queue.map((albumObj) => {
                        return (
                            <Album 
                                album={albumObj}
                                key={albumObj.id} 
                                clickHandler={this.props.removeAlbum}
                            />
                        )
                    })
                    } 
                

            </div>
        )
    }

}

export default Queue