import React from "react";
import { styled } from "styled-components";
import { Button } from "./styles/Button";

const ErrorPage = () => {
  return (
    <Wrapper>
      <div className="container">
        <div>
          <h2>404</h2>
          <h2>UH OH ! You're lost</h2>
          <p>
            The page you are looking for doesn't exixt.How can you got here is a
            mystery.But you can go back to home page by simply click on the
            given below button.
          </p>
          <Button style={{borderRadius:"8pxx"}}>Go Back to Home </Button>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
.container {
    padding: 9rem 0;
    text-align: center;

    h2 {
      font-size: 10rem;
    }

    h3 {
      font-size: 4.2rem;
    }

    p {
      margin: 2rem 0;
    }
  }
`;
export default ErrorPage;
