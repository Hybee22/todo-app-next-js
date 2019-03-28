import React, { Component } from "react";
import Link from "next/link";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;
