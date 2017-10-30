import React from 'react'
// import Typed from 'typed.js'
import './First.css'





class Second extends React.Component {
    componentDidMount() {
      var typed = new Typed('.element2', {
        strings: ["We are a product studio ^1500","We are open source", "Built and run by college freshmen ^1000", "Blockchain, ^500 Crypto, ^500 and systems", "Unconventional Thinking", "Open Source"],
        typeSpeed: 30,
        backSpeed: 15,
        smartBackspace: true,
        loop: true
      })
    }
    render() {
        return (
          <section className="second">
            <div className="element2">

            </div>
          </section>


        )
    }
}
export default Second
