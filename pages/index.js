import React from 'react';
import Greeting from '../components/greeting'

const IndexPage = () => {

    const saludar = () => {
        alert('HOLA')
    }

    return(
    <div>
        <h1>Hello world modificado 2</h1>
        <Greeting name='sandro' onGreeting={saludar}/>
    
    </div>
)
}

export default IndexPage;