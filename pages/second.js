import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import styled, { css } from "styled-components";

const Description = styled.div`
  display: flex;

  flex-direction: ${(props) => (props.mobile ? "column" : "row")};

  margin: 0 auto;
  box-sizing: border-box;

  align-items: center;
  justify-content: center;

  p {
    margin-left: 20px;
    font-size: 16px;
  }

  + div {
    margin-top: 20px;
  }
`;

const GroupDescription = ({ mobile }) => (
  <>
    <Description mobile={mobile}>
      <Box mobile={mobile} />
      <p>
        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum
      </p>
    </Description>

    <Description mobile={mobile}>
      <Box mobile={mobile} />
      <p>
        Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
        ipsumLorem ipsum
      </p>
    </Description>
  </>
);

const MOBILE_WIDTH = 480;

export default function Second() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      setMobile(width < MOBILE_WIDTH);
    }

    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      setMobile(width < MOBILE_WIDTH);
    });

    return () => {
      // Component will unmount
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <>
      {!mobile ? (
        <GroupDescription />
      ) : (
        <AwesomeSlider>
          <GroupDescription />
        </AwesomeSlider>
      )}
      <button onClick={() => setMobile(!mobile)}>Toogle mobile</button>

      <span>{mobile.toString()}</span>
    </>
  );
}

const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: pink;

  ${(props) =>
    props.mobile &&
    css`
      margin: 0 auto;
    `}
`;
