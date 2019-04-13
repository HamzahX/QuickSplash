import React, {Component} from 'react';
import Cookies from "universal-cookie";
import {socket} from '../Router';
import $ from 'jquery';

import Logo from "../Game/Utilities/Logo";
import ButtonSplash from "./Utilities/ButtonSplash";
import {AllPlayers} from "../Setup/AllPlayers";

import posed from 'react-pose';

import Test from '../Setup/Test'

import {tween, easing, styler, composite, physics} from 'popmotion';
import PlayerSplash from "../Setup/PlayerSplash";

const cookies = new Cookies();

class Waiting extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allPlayers: [],
        };
    }

    componentDidMount() {

        //const lobbyCode = this.props.lobbyCode;
        const lobbyCode = localStorage.getItem('lobbyCode');

        $('#button').click(function () {
            socket.emit('startGame', lobbyCode);
        });

        socket.on('addPlayers', (players) => {
            this.setState({
                allPlayers: players
            })
        });

        socket.on('failedToStart', (errorMessage) => {
            alert(errorMessage);
        })
    }

    render() {
        let button = null;
        let text = null;
        let isCreator = this.props.isCreator;
        let hasStarted = this.props.hasStarted;
        let lobbyCode = localStorage.getItem('lobbyCode');
        if (!hasStarted) {
            if (isCreator) {
                // button = <img id="button" src={ require('../Assets/images/blueSplash.png') } alt="button" />
                button = <div id="button"><ButtonSplash imagesource={require('../Assets/images/blueSplash.png')}
                                                        text={"Start"}/></div>
            }
            text = "THE GAME TO START"
        } else {
            text = "EVERYONE TO ANSWER"
        }

        return (
            <div className="game">
                <title>Create a lobby</title>
                <Logo/>
                <h1>CODE: {lobbyCode}</h1>
                <h1>WAITING FOR {text}...</h1>
                {button}
                <AllPlayers allPlayers={this.state.allPlayers}/>
            </div>
        );
    }

}

export default Waiting;
