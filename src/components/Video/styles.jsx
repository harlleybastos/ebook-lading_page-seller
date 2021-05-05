import styled from "styled-components";
import Iframe from "react-iframe";

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 5rem;
  position: relative;
`;

export const VideoForeground = styled.div`
  top: 0;
  right: 0;
  left: 0;
  width: 80%;
  height: 85%;
  margin: 0 auto;
`;

export const VideoEbook = styled(Iframe)`
  top: -60px;
  left: 0;
  width: 100%;
  height: calc(100% + 120px);
`;
