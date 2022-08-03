import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 15px;
  border: 0;
  align-items: center;
  margin: 200px auto;
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

export const Name = styled.h1`
  font-size: 20px;
  text-align: center;
`;

export const UserInfoContainer = styled.div`
  padding-top: 50px;
`;

export const UserInfo = styled.p`
  font-size: 14px;
  color: #c7c7c7;
  text-align: center;
`;

export const UserStats = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 60px;
  padding: 0;
  background-color: #d0d0d0;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 65px;
`;

export const UserStatsItem = styled.li`
  text-align: center;
  font-size: 15px;
  list-style-type: none;
`;

