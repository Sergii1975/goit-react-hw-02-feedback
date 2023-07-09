import React from 'react';
import PropTypes from 'prop-types';
import { Container, Item, Value } from './Statistics.styled'

 const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Container>
      <Item>
       Good:  <Value>{good}</Value>
      </Item>
      <Item>
        Neutral: <Value>{neutral}</Value>
      </Item>
      <Item>
        Bad: <Value>{bad}</Value>
      </Item>
      <Item>
        Total: <Value>{total}</Value>
      </Item>
      <Item>
        
          Positive feedback: <Value>{positivePercentage}%</Value>
        
      </Item>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics