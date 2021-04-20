export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,

    // REMOVE after finished developing...
    // token: 'BQAFj0XL0sUcj9OBaslFIagNxip_2o3jDsVwpPN-ZB01U_UYPbQioBg8wWkZmNC1OFFHFojm6TE8SbPPwhudeYeNQv43nlz69iMF5MwM1v8MOUyAa3mGTcC0DWGmifTkUlc_FiagelL40lVvVm2mW2BtYlSYHQSJyS4E-AS998UPeBQ_' ,
}

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {

        // Fetching the user from spotify api
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }; 
        
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        
        //  For Fetching the User's exact Playlist from Spotify !
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        
        // For the Discover Weekly Playlist from Spotify !
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };
        
        default:
            return state;
    }
}

export default reducer;