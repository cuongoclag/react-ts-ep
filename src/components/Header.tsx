import React from "react";
import ArrowL from '../assets/img/arrowLeft.png'
import { IProps } from '../interfaces/props'
import { useNavigate } from "react-router-dom";

function Header({title, arrowL} : IProps) {
  const navigate = useNavigate()
  return <div className="header">
    {
      arrowL && (<img src={ArrowL} alt="arrow" className="header-arrow" onClick={() => navigate(-1)}/>)
    }
    <div className="header-title">{title}</div>
  </div>;
}

export default Header;

