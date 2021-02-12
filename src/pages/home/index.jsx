import React from "react";
import { NavLink, Link } from "react-router-dom";
import 'antd/dist/antd.css';
import { Button } from 'antd';

function Home() {
  return (
    <div className="Home">
      <main className="container">
        
      </main>
      <NavLink className="nav-link" to="/login">

        <Button>确定</Button>
      </NavLink>
    </div>
  );
}

export default Home;
