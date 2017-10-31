import React from 'react'
// import Particles from 'react-particles'
// import Typed from 'typed.js'
import './First.css'





class First extends React.Component {
    componentDidMount() {
      var typed = new Typed('.element', {
        strings: ["We are a product studio ^1500","We are open source", "Built and run by college freshmen ^1000", "Blockchain, ^500 Crypto, ^500 and systems", "Unconventional Thinking", "Open Source"],
        typeSpeed: 30,
        backSpeed: 15,
        smartBackspace: true,
        loop: true
      })
    }
    render() {
        return (

          <section className="first">
            {/* <Particles /> */}
            <div className="element-wrap">
            <div className="element">

            </div>
            </div>
          </section>


        )
    }
}
export default First
