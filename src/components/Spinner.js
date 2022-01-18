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
height: 50px;
width: 50px;
border: 5px solid var(--primary-color-1);
border-right-color: transparent;
border-radius: 50%;
position: absolute;
top: 10%;
left: 50%;
`;

const Spinner = () => (
  <Loader />
);

export default Spinner;
