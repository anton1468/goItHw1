import React from 'react';
import {Label, Percentage, StatItem} from "./Statistics.style";
import {number, shape, string} from "prop-types";

const StatisticItem = ({item}) => {
  const backgroundColor =  '#'+(Math.random()*0xffffff<<0).toString(16);
  return (
    <StatItem color={backgroundColor}>
      <Label className="label">{item.label}</Label>
      <Percentage className="percentage">{item.percentage}%</Percentage>
    </StatItem>
  );
};
StatisticItem.propTypes = {
  item: shape({
    label: string,
    percentage: number
  })
}

export default StatisticItem;
