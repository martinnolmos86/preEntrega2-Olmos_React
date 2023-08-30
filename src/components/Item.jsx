import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Item = ({ info }) => {
  return (
    <>
      <StylesItem>
        <Link to={`/detail/${info.id}`} className="Link">
          <div className="container">
            <img src={info.img} alt="" />
            <div className="container_p">
              <h3>Quiero Donar</h3>
              <bdi>$ {info.price}</bdi>
            </div>
          </div>
        </Link>
      </StylesItem>
    </>
  );
};

const StylesItem = styled.div`
  .Link {
    text-decoration: none;
  }
  .container {
    width: 264.5px;
    height: 333.56px;
    border: 12px;
    text-align: center;

    img {
      height: 162px;
      width: 244px;
    }
    .container_p {
      text-align: center;
      h3 {
        font-size: 34px;
        font-family: "Poppins", sans-serif;
        color: #e8a138;
        font-style: italic;
        font-weight: 500;
      }
      bdi {
        font-size: 18px;
        font-family: "Poppins", sans-serif;
        color: #e8a138;
      }
    }
  }
`;

export default Item;
