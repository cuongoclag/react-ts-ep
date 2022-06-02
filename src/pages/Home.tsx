import React from "react";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <Header title="EastPlayers Test" />
      <Link to="/todo">
        <LinkButton number={1} nameLink="Todo List" />
      </Link>
      <Link to="/country">
        <LinkButton number={2} nameLink="Country List" />
      </Link>
    </div>
  );
}

export default Home;
