import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {
    const [counter, setCounter] = useState(0);
    const [name, setName] =  useState('Valor Inicial');
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exerciocio #01"/>
            <div className="center">
                <span className="text">{counter}</span>
                <div>
                    <button className="btn" onClick={() => setCounter(counter-1)}>-1</button>
                    <button className="btn" onClick={() => setCounter(counter+1)}>+1</button>
                    <button className="btn" onClick={() => setCounter(current => current + 1000)}>+1000</button>
                </div>
            </div>
            <SectionTitle title="Exerciocio #02"/>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)}/>
            <span className="text">{name}</span>
        </div>
    )
}

export default UseState
