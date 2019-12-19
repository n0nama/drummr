import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Sound from 'react-sound';

class SinglePad extends Component {
    state = {
        active : false,
        status : Sound.status.STOPPED,
        pad : this.props.pad
    }
    pushHandle(){
        this.setState({active : true, status : Sound.status.PLAYING });
    }
    pushReleave(){
        this.setState({active : false, status : Sound.status.STOPPED });
    }
    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDownHandle);
        document.addEventListener('keyup', this.onKeyUpHandle);
    }
    onKeyDownHandle = e => {
        if(e.keyCode === this.state.pad){
            this.setState({status : Sound.status.STOPPED });
            this.setState({status : Sound.status.PLAYING });
            this.setState({active : true});
        }
        console.log(e.keyCode)
    }
    onKeyUpHandle = e =>{
        if(e.keyCode === this.state.pad){
            this.setState({active : false});
        }
    }
    render(){
        return(
            <Card 
                className = {this.state.active ? "pushed" : null}
                onMouseDown={this.pushHandle.bind(this)}
                onMouseUp={this.pushReleave.bind(this)}
                onKeyDown={e => this.onKeyDownHandle(e)}
                onKeyUp={e => this.onKeyUpHandle(e)}
                color={this.props.color ? this.props.color : null}
            >
                {this.props.sound ?
                    <Sound url={"/kits/def/" + this.props.sound}
                           playStatus={this.state.status}
                           volume={this.props.volume}
                    />
            :null}
                
            </Card>
        )
    }
}

export default SinglePad

window.addEventListener("keydown", e => {
    let audio = document.getElementById(e.key.toUpperCase());
    if (!audio) {
      return;
    }
    console.log(e.key);
    audio.play();
});