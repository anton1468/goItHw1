import styled from 'styled-components';
export const StatisticContainer = styled.div`
  margin: 0 auto;
  width: 350px;
  height: 250px;
  background-color: white;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  padding-top: 50px;
`;

export const StatList = styled.ul`
  display: flex;
  padding: 0;
  position: absolute;
  height: 60px;
  width: 350px;
  bottom: 0;
  margin: 0;
`;

export const StatItem = styled.li`
  list-style-type: none;
  width: 100%;
  text-align: center;
  padding-top: 10px;
  background-color: ${props => props.color};;
`;

export const Label = styled.p`
  font-size: 14px;
  padding: 0;
  margin: 0;
`;

export const Percentage = styled.p`
  font-size: 18px;
  padding: 0;
  margin: 0;
`;
