import React from 'react';
import {useParams} from 'react-router-dom'

const Param = (props) => {
    const {id} = useParams();
    return (
        <div className="param">
            <h1>Param</h1>
            <h2>Valor do Paramentro: {id}</h2>
        </div>
    );
}

export default Param;