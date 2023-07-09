import PropTypes from 'prop-types';
import { Title, Wrap } from './SectionTitle.styled';


const SectionTitle = ({ title, children }) => {
  return (
    <Wrap>
      <Title>{title}</Title>
      {children}
    </Wrap>
  );
};


SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default SectionTitle;