import React, { Component } from 'react'

export default class DemoReactClassComponent extends Component {
   //render là phương thức chứa nội dung giao diện của thẻ
    render() {
        return (
            <div>
             <nav className="nav justify-content-center">
  <a className="nav-link active" href="#">Active link</a>
  <a className="nav-link" href="#">Link</a>
  <a className="nav-link disabled" href="#">Disabled link</a>
</nav>

            </div>
        )
    }
}
