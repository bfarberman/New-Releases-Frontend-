import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import NewAlbums from "./containers/NewAlbums"
import Queue from "./containers/Queue"
import Header from "./components/Header" 

class App extends Component {

state = {
  albums: [],
  queue: [],
  instructions: false
}

revealInstructions = () => {
  this.setState({
    instructions: !this.state.instructions 
  })
}

componentDidMount(){
  fetch("http://localhost:3000/albums")
  .then(resp => resp.json())
  .then(albums => {
    this.setState({
      albums: albums 
    })
  })
}

listAlbum = (newAlbum) => {
  this.setState({
    albums: [...this.state.albums, newAlbum] 
  })
}

addAlbumFromForm = (newalbum) => {
  let allAlbums = [...this.state.albums]
  allAlbums.push(newalbum)
  this.setState({albums: allAlbums})

}

deleteAlbum = (id) => {
  this.setState({
    albums: this.state.albums.filter(album => album.id !== id)
})
}


// addAlbum = (id) => {
//   const foundAlbum = this.state.albums.find(album => {
//     return album.id === id 
//   })
//   if(!this.state.queue.includes(foundAlbum)) {
//     this.setState({
//       queue: [...this.state.queue, foundAlbum] 
//     })
//   }
// }

// removeAlbum = (id) => {
//   const filteredQueue = this.state.queue.filter(album => {
//     return album.id !== id
//   })
//   this.setState({
//     queue: filteredQueue
//   })
// }

render() {
  return (
    <div className="album-container">
      {/* <button onClick={this.revealInstructions}>{this.state.instructions ? "Hide" : ""} Instructions</button>
      {this.state.instructions ? <Header /> : ""} */}
     
      <NewAlbums 
      listAlbum={this.listAlbum}
      albums={this.state.albums}
      addAlbum={this.addAlbum}
      formsubmit={this.addAlbumFromForm}
      deleteAlbum={this.deleteAlbum}
      
      />
      <Queue 
      queue={this.state.queue}
      removeAlbum={this.removeAlbum}
      /> 
    </div>
  )
  } 
} 

export default App




