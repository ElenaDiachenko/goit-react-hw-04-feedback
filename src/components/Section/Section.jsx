import PropTypes from 'prop-types';
import { Title,SectionWrap } from './Section.styled';

export const Section = ({ title, children }) => {
    return(
    <SectionWrap>
        <Title>{title}</Title>
            {children}
    </SectionWrap>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children:PropTypes.element.isRequired,
};