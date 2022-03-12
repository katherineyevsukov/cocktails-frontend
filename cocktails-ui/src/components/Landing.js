import React, { useState } from 'react'
import Login from './Login'
import Signup from './Signup'

function Landing(){
    const [signup, setSignup] = useState(false)

    return (
        <div>
            {!signup ? <Login setSignup={setSignup}/> : null}
            {signup ? <Signup setSignup={setSignup}/> : null}
        </div>
    )
}

export default Landing
