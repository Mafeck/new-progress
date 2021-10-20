import { style } from '@material-ui/system';
import styled from 'styled-components';
import GroupIcon from '../../assets/icons/groupIcon.svg';
import habitIcon from '../../assets/icons/habitIcon.svg';

export const Container = styled.div`
    display: flex;
    border: 2px solid black;
    width: 330px;
    height: 80px;
    padding: 15px 10px;
    background-color: var(--white);

    h4 {
        font-family: ;
        font-size: 12px;
        font-weight: 600;
        line-height: 15px;
        letter-spacing: -0.017em;
        color: var(--color-title);
    }

    span {
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        letter-spacing: -0.017em;
        color: var(--color-text);
    }

`;

export const Img = styled.div`
    background-image: ${(props) => props.type ? `url(${GroupIcon})` : `url(${habitIcon})`};
    width: 50px;
    margin-right: 10px;
`;