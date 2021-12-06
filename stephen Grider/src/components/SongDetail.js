import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
//   console.log(props);
    if(!song){
        return <div>Select a Song</div>
    }

    return (
        <div>
            <h3>Details for :</h3>
            <p>
                Title : {song.title}
                <br/>
                Duration : {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = state => {
  return { song: state.selectedSong }; ///Now we can access this object as a prop of this component
};

export default connect(mapStateToProps)(SongDetail);
