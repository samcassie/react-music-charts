import React, {Component} from 'react';
import SongList from '../components/SongList.js'
import Heading from '../components/Heading.js'

class MusicContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            songsList: []
        };
    }

    componentDidMount(){
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
    .then(res => res.json())
    .then(songs => this.setState({songsList: songs.feed.entry}))
    .catch(err => console.error)
}

    render(){

        return(
            <div>
                <Heading />
                <SongList songsList={this.state.songsList}/>
            </div>
        )
    }

}

export default MusicContainer;
