import React from 'react';
import {arrayOf, number, shape, string} from "prop-types";
import {Label, Percentage, StatisticContainer, StatItem, StatList, Title} from "./Statistics.style";

const Statistics = ({title, stats}) => {
  return (
    <StatisticContainer>
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map((item) => {
          const backgroundColor =  '#'+(Math.random()*0xffffff<<0).toString(16);
          return (
            <StatItem color={backgroundColor} key={item.id}>
            <Label className="label">{item.label}</Label>
            <Percentage className="percentage">{item.percentage}%</Percentage>
          </StatItem>
          )
        })}
      </StatList>
    </StatisticContainer>
  );
};
Statistics.propTypes = {
  title: string,
  stats: arrayOf(shape({
    id: string.isRequired,
    label: string.isRequired,
    percentage: number.isRequired
  }))
}

export default Statistics;
