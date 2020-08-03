import React from 'react';
import Song from './Song.js';

const SongList = (props) => {

    const songs = props.songsList.map(song => {
        return(
                <Song
                key={song.id.attributes["im:id"]}
                title={song["im:name"].label}
                artist={song["im:artist"].label}
                link={song["im:collection"].link.attributes.href}
                image={song["im:image"]}
                price={song["im:price"].label}
                ></Song>
        )
    })

    return(
        <div>
            {songs}
        </div>
    )


}

export default SongList;
