import React from 'react'
import {render} from 'react-dom'
import Navbar from './components/Navbar.js'
import First from './components/First.js'
import Second from './components/Second.js'
import './stylesheet.css'

const App = () => {
return(
<div>
<Navbar />
<First />
<Second />
</div>
)
}


render(<App />, document.getElementById('app'))
