import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0deg);
}

100% {
  transform: rotate(360deg);
}
`;
const Loader = styled.span`
animation: ${rotate} linear infinite 1s;
height: 70px;
width: 70px;
border: 8px solid var(--primary-color-1);
border-right-color: transparent;
border-radius: 50%;
position: absolute;
top: 20%;
left: 50%;
z-index: -1;
`;

const Spinner = () => (
  <Loader />
);

export default Spinner;
