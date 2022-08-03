import styled from 'styled-components';

export const List = styled.ul`
  width: 250px;
  margin: 150px auto 0 auto;
`;

export const Friend = styled.li`
  width: 100%;
  display: flex;
  height: 70px;
  align-items: center;
  border: 1px solid black;
  gap: 10px;
  background-color: white;
`;

export const Online = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.online ? 'green' : 'red'};
  margin-left: 30px;
`;

export const Avatar = styled.img`
  height: 50px;
  width: 50px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 15px;
`;
