import React, { useState } from "react";
import axios from 'axios';

function JoinBlock({ onLogin }) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) return alert("Неверные данные!");
        setLoading(true);
        await axios.post('/rooms', {
            roomId,
            userName
        });
        onLogin();
    }

    return (
        <div className="join-block">
            <input type="text" placeholder="Room ID" value={roomId} onChange={e => setRoomId(e.target.value)}/>
            <input type="text" placeholder="Ваше имя" value={userName} onChange={e => setUserName(e.target.value)}/>
            <button disabled={isLoading} onClick={onEnter}>
                {isLoading ? 'ВХОД...' : 'Войти'}
            </button>
      </div>
    );
}

export default JoinBlock;