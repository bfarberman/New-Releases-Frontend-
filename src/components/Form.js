import React, { Component } from "react"

class Form extends Component {
    state = {
        artist: "",
        title: "",
        image: "",
        notes: "",
        submit: false
    }

    showSubmit = () => {
        this.setState({
          submit: !this.state.submit
        })
      }

    handleArtist = (e) => {
        this.setState({artist: e.target.value})
    }

    handleTitle = (e) => {
        this.setState({title: e.target.value})
    }

    handleNotes = (e) => {
        this.setState({notes: e.target.value})
    }
    
    handleImage = (e) => {
        this.setState({image: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            artist: "", title: "", image: "", notes: ""
        })
        // this.props.formsubmit(this.state)
        fetch("http://localhost:3000/albums", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(resp => resp.json())
        .then(newAlbum => {this.props.listAlbum(newAlbum)})
    }



    render(){
        return( 
   
            <div> 
               
               <button onClick={this.showSubmit}>{this.state.submit ? "Hide" : ""} Form</button>
            {this.state.submit ?  
    <form>
    <input type="text" name="artist" value={this.state.artist} onChange={this.handleArtist} placeholder="Artist"></input>
    <input type="text" name="title" value={this.state.title} onChange={this.handleTitle} placeholder="Title"></input>
    <input type="text" name="notes" value={this.state.notes} onChange={this.handleNotes} placeholder="Notes"></input>
    <input type="text" name="image" value={this.state.image} onChange={this.handleImage} placeholder="Image"></input>
    <input type="submit"value="Submit" onClick={this.handleSubmit}></input> 
    </form>  
    : "" }
    
    </div>    

        )
    }    
    


}

export default Form 