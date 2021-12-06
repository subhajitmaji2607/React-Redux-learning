import React,{Component, component} from "react";
import {connect} from 'react-redux'
import {selectSong} from '../actions'


class SongList extends Component{
    renderList() {
      return this.props.songs.map(song => {
        return (
          <div className="item" key={song.title}>
            <div className="right floated content">
              <button className="ui button primary" onClick={()=>this.props.selectSong(song)}>Select</button>
            </div>
            <div className="content">{song.title}</div>
          </div>
        );
      });
    }
    
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}
const mapStateToProps = (state)=>{
    // console.log(state)  //this is the object we are getting from reducers/index.js
    return {songs : state.songs};   //Now we can access this object as a prop of this component
}
export default connect(mapStateToProps,{selectSong})(SongList);