import React from 'react'
import Button from '@mui/material/Button';

import io from 'socket.io-client';
const socket = io("http://192.168.1.150:7000/");


interface InputProps {
    data:any;
}

const Input: React.FC<InputProps> = ({data}) => {

    React.useEffect(()=>{
        socket.emit("sendMessage",{message:data});
    },[data]);

    return (
        <div></div>
    );
}

interface OutputProps {
    data:any;
}

const Output: React.FC<OutputProps> = ({data}) => {

    React.useEffect(()=>{
        socket.on("broadcastMessage",(message)=>{
            data.output(message);
        })
      },[socket]);

    return (
        <div></div>
    );
}

interface RoomProps {
    data:any;
}

const Room: React.FC<RoomProps> = ({data}) => {

    React.useEffect(()=>{
        socket.emit("joinRoom",{message:data});
      },[]);

    return (
        <div></div>
    );
}

const exportedObject = {
    Input,
    Output,
    Room
};

export default exportedObject; 