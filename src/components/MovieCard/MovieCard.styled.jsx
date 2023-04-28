import styled from 'styled-components';

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export const Title = styled.h2`
  color: #000000;
  font-size: 14px;
  text-align: center;
`;
