import PropTypes from 'prop-types';
import { InputFilter, NameInput } from './Filter.styled';

const Filter = ({value, onChange}) => {
    return (
        <NameInput>
            Find contacts by name
            <InputFilter type="text" value={value} onChange={onChange} />
        </NameInput>
    );
}

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;