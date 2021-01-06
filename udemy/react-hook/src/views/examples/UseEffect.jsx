import React, { useState, useEffect } from 'react';
import PageTitle from '../../components/layout/PageTitle';
import SectionTitle from '../../components/layout/SectionTitle';

function calculateFatorial(param) 
{
    const number = parseInt(param);
    if (number < 0) return -1;
    if (number === 0) return 1;
    return calculateFatorial(number-1) * number;
}

function validateIsPar(param)
{
    const number = parseInt(param);
    return (number % 2 === 0);
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    useEffect(() => setFatorial(calculateFatorial(number)), [number])

    const [numberIsPar, setNumberIsPar] = useState(0);
    const [isPar, setIsPar] = useState(true);
    useEffect(() => setIsPar(validateIsPar(numberIsPar)), [numberIsPar])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
            <div className="center">
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)}/>
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial > 0 ? fatorial: 'Fatorial I'}</span>
                </div>

            </div>          
            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <input type="number" className="input" value={numberIsPar} onChange={e => setNumberIsPar(e.target.value)}/>
                <div>
                    <span className="text">Par ou Impar: </span>
                    <span className="text red">{isPar ? 'Par' : 'Impar' }</span>
                </div>

            </div>
        </div>
    )
}

export default UseEffect
