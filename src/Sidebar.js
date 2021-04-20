import React from 'react';
import './Sidebar.css'
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SearchIcon from '@material-ui/icons/Search';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className='sidebar'>
            <img className='sidebar_logo'
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <SidebarOptions Icon={HomeIcon} title='Home' />
            <SidebarOptions Icon={SearchIcon} title='Search' />
            <SidebarOptions Icon={LibraryMusicIcon} title='Your Library' />

            <br />
            <strong className='sidebar_title'>PLAYLISTS</strong>
            <hr />

            {/* Gets the user's exact */}
            {playlists?.items?.map(playlist => (
                <SidebarOptions className="sidebar_playlist" title={playlist.name} />
            ))}
            

        </div>
    )
}

export default Sidebar
