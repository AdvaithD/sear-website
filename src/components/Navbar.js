import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
          <nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
  <a class="navbar-brand" href="#"></a>

  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Projects</a>
      </li>
    </ul>
  </div>
</nav>

        )
    }
}
export default Navbar
