import React, {Component} from "react";

class Song extends Component{

    render(){

        return(
            <div className="song">
                <img src={this.props.image[0].label} />
                <span className="titleAndArtist"><a href={this.props.link}>{this.props.title} - {this.props.artist}</a></span>
                <span className="price"> {this.props.price}</span>
            </div>
        )

    }
}

export default Song;
