import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <a className="brand">HyBEE</a>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a title="About Project">About</a>
            </Link>
            <Link href="/todo">
              <a>Todo</a>
            </Link>
            <Link href="/api/todos">
              <a>API EndPoint</a>
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
