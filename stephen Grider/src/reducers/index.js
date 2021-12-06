import { combineReducers } from "redux";

const songReducer = ()=>{
    return[
        {
            title : "30 Lives",
            duration : '2:19'
        },
        {
            title : " All Eyes",
            duration : '3:59'
        },
        {
            title : "All For You",
            duration : '4:33'
        }
    ];
}

const selectedSongReducer = (selectedSong=null,action)=>{
    if(action.type === 'SELECTED_SONG'){
        return action.payload
    }
    return selectedSong;
}


export default combineReducers(
    //we are getting this object as state in mapStateToProps function
    {
    songs : songReducer,
    selectedSong : selectedSongReducer
    }
)