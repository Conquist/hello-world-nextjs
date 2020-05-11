import React from 'react'

const Greeting = ({name,onGreeting}) => {
return (
    <button onClick={onGreeting}>
        Hola {name}
    </button>


)
}

export default Greeting;