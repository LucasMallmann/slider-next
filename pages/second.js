import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import styled from "styled-components";
import media from "styled-media-query";

const Description = styled.div`
  display: flex;

  ${media.lessThan("500px")`
    flex-direction: column;
  `}

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

const DescriptionContainer = styled.div`
  ${media.lessThan("500px")`
    display: none;
  `}
`;

const SliderContainer = styled.div`
  ${media.lessThan("500px")`
    display: block;
  `}

  ${media.greaterThan("500px")`
    display: none;
  `}
`;

export default function Second() {
  return (
    <>
      <DescriptionContainer>
        <Description>
          <Box />
          <p>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </p>
        </Description>

        <Description>
          <Box />
          <p>
            Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
            ipsumLorem ipsumLorem ipsum
          </p>
        </Description>
      </DescriptionContainer>

      {/* Div que engloba o slider */}
      <SliderContainer>
        <AwesomeSlider>
          <Description>
            <Box />
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsum
            </p>
          </Description>

          <Description>
            <Box />
            <p>
              Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem
              ipsumLorem ipsumLorem ipsum
            </p>
          </Description>
        </AwesomeSlider>
      </SliderContainer>
      <button onClick={() => setMobile(!mobile)}>Toogle mobile</button>
    </>
  );
}

const Box = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: pink;

  ${media.lessThan("500px")`
    margin: 0 auto;
  `}
`;
