import React, { Component } from "react"

class Album extends React.Component { 

   deleteAlbum = (id) => {
    fetch(`http://localhost:3000/albums/${id}`, {
        method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(resp => {
        if(resp.success){
            this.props.deleteAlbum(id) 
        }
    })     
   }

   render() {
    return (
        <div>
            <h3>
            <img src={this.props.album.image}/>
                <p>Artist: {this.props.album.artist}</p>
                    <p>Album: {this.props.album.title}</p>
                        <p>Notes: {this.props.album.notes}</p>
                    <button onClick={(e) => {
                        e.stopPropagation()
                        this.deleteAlbum(this.props.album.id)} 
                    }
                        >Delete</button>
            </h3>
            
            
        </div>
    )
}
}
export default Album 