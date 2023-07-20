import React from "react";
import styled from "styled-components";

const CartWidget = () => {
  return (
    <>
      <StyledCartWidget>
        <div>
          <a href="#">
            <i className="bi bi-cart3"> </i>
          </a>
          <p>2</p>
        </div>
      </StyledCartWidget>
    </>
  );
};

// STYLES

const StyledCartWidget = styled.div`
  div {
    display: flex;
    align-items: center;
    p {
      color: black;
    }
    a i {
      font-size: 14px;
      color: black;
      padding: 1rem;
    }
  }
`;

export default CartWidget;
