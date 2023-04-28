import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BackBtn = styled(Link)`
  display: flex;
  width: 100px;
  height: 30px;
  margin: 15px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  font-weight: 600;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    background-color: lightgrey;
    color: #ffffff;
    cursor: 'pointer';
  }
`;

export const MainData = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 15px;
  padding-top: 30px;
  padding-bottom: 30px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const MovieImg = styled.img`
  width: 180px;
`;

export const InfoWrapper = styled.div``;

export const Title = styled.h2``;

export const SubTitle = styled.h3`
  margin: 0;
`;

export const Text = styled.p`
  margin-top: 15px;
`;

export const AddData = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AddDataItem = styled.li``;

export const AddDataLink = styled(NavLink)`
  display: flex;
  margin-bottom: 8px;

  &.active {
    color: rgb(227, 17, 108);
  }
`;
