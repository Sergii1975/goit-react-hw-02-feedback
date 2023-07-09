import PropTypes from 'prop-types';
import { Container, Button, Wrapper } from './FeedbackOptions.styled'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <Container key={option}>
            <Button
            type="button"
            onClick={() => onLeaveFeedback(option)}
           >
            {option}
          </Button>
          </Container>
        );
      })}
    </Wrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;