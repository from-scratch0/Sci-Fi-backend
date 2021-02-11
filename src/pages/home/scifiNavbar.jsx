import React, { Component } from "react";
import Navbar from "../../common/navbar";

class ScifiNavbar extends Component {
  navbarItems = [
    { path: "/movies", label: "影单  " },
    { path: "/books", label: "书单  " },
    { path: "/science", label: "科谱  " },
    { path: "/press", label: "杂志  " },
    { path: "/albums", label: "专辑  " },
    { path: "/passengers", label: "乘客  " },
    { path: "/shop", label: "商店  " },
    
  ];

  render() {
    return <Navbar navbarItems={this.navbarItems} />;
  }
}

export default ScifiNavbar;
