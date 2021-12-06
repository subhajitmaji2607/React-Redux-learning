//Action Creator
export const selectSong = (song)=>{
    //Return an action
    return{
        type : 'SELECTED_SONG', //type is required for an action creator
        payload : song          //payload is optional for action creator
    }
}