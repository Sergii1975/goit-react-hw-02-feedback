import PropTypes from 'prop-types';


const SectionTitle = ({ title, children }) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};


SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default SectionTitle;