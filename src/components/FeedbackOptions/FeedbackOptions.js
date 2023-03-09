import PropTypes from 'prop-types';
import { OptionsList, Option } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(option => {
        return (
          <li key={option}>
            <Option type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Option>
          </li>
        );
      })}
    </OptionsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
