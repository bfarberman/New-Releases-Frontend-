import React, { Component } from "react"
import Album from "../components/Album"
import Form from "../components/Form" 
import './NewAlbums.css'


class NewAlbums extends Component {
    render() {
  console.log(this.props.albums)
        return (
            <div className="new-albums">
                <h2 style={{color: "blue"}}>Music Diary</h2>
                <Form formsubmit={this.props.formsubmit} albums={this.props.albums} listAlbum={this.props.listAlbum}/>
                    {
                    this.props.albums.map((albumObj) => {
                        return (
                            <Album 

                                album={albumObj}
                                key={albumObj.id} 
                                clickHandler={this.props.addAlbum}
                                deleteAlbum={this.props.deleteAlbum}
                            />
                        )
                    })   
                    } 
            </div>
        )
    }
}

export default NewAlbums