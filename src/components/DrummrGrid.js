import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import './DrummrGrid.css';

import SinglePad from './SinglePad';

const pack = [
    {
        id : 1,
        type : 'loop',
        color : 'teal',
        sound : 'melody3.mp3',
        pad : 49,
        volume : 20
    },
    {
        id : 2,
        type : 'loop',
        color : 'teal',
        sound : 'melody2.mp3',
        pad : 50,
        volume : 70
    },
    {
        id : 3,
        type : 'loop',
        color : 'teal',
        sound : 'melody4.mp3',
        pad : 51,
        volume : 100
    },
    {
        id : 4,
        type : 'loop',
        color : 'teal',
        sound : '',
        pad : 52,
        volume : 100
    },
    {
        id : 5,
        type : 'loop',
        color : 'purple',
        sound : '',
        pad : 81,
        volume : 100
    },
    {
        id : 6,
        type : 'oneShot',
        color : 'blue',
        sound : '',
        pad : 82,
        volume : 100
    },
    {
        id : 7,
        type : 'oneShot',
        color : 'blue',
        sound : '',
        pad : 83,
        volume : 100
    },
    {
        id : 8,
        type : 'oneShot',
        color : 'blue',
        sound : '',
        pad : 84,
        volume : 100
    },
    {
        id : 9,
        type : 'loop',
        color : 'purple',
        sound : '',
        pad : 72,
        volume : 100
    },
    {
        id : 10,
        type : 'oneShot',
        color : 'yellow',
        sound : '',
        pad : 74,
        volume : 100
    },
    {
        id : 11,
        type : 'oneShot',
        color : 'yellow',
        sound : '',
        pad : 75,
        volume : 100
    },
    {
        id : 12,
        type : 'oneShot',
        color : 'brown',
        sound : '',
        pad : 76,
        volume : 100
    },
    {
        id : 13,
        type : 'oneShot',
        color : 'red',
        sound : 'kick1.wav',
        pad : 78,
        volume : 100
    },
    {
        id : 14,
        type : 'oneShot',
        color : 'red',
        sound : '',
        pad : 77,
        volume : 100
    },
    {
        id : 15,
        type : 'oneShot',
        color : 'orange',
        sound : 'snare1.wav',
        pad : 188,
        volume : 100
    },
    {
        id : 16,
        type : 'oneShot',
        color : 'orange',
        sound : '',
        pad : 190,
        volume : 100
    }
]

class DrummrGrid extends Component {
    state = {
        pack : pack
    }
    render(){
        return(
            <Card.Group id="pattern">
                {this.state.pack.map(el=>{
                    return (
                        <SinglePad key={el.id} color={el.color} sound={el.sound} pad={el.pad} volume={el.volume}/>
                    )
                })}
            </Card.Group>
        )
    }
}

export default DrummrGrid