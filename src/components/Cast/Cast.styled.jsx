import styled from 'styled-components';

export const CastWrapper = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 16px;
`;
export const CastCard = styled.li``;

export const CastImg = styled.img`
  margin: 0;
  width: 100%;
  object-fit: cover;
`;

export const CastName = styled.h4`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const Hero = styled.p`
  margin-top: 8px;
`;
