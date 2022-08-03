import React from 'react';
import {arrayOf, bool, number, oneOfType, shape, string} from "prop-types";
import {StatisticContainer, StatList, Title} from "./Statistics.style";
import StatisticItem from "./StatisticItem";

const Statistics = ({title, stats}) => {
  return (
    <StatisticContainer>
      {title && <Title className="title">{title}</Title>}
      <StatList className="stat-list">
        {stats.map((item) =>
          <StatisticItem key={item.id} item={item}/>
        )}
      </StatList>
    </StatisticContainer>
  );
};
Statistics.propTypes = {
  title: oneOfType([string, bool]),
  stats: arrayOf(shape({
    id: string,
    label: string,
    percentage: number
  }))
}

export default Statistics;
