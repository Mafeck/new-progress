import styled from 'styled-components';
import GroupIcon from '../../assets/icons/groupIcon.svg';
import HabitIcon from '../../assets/icons/habitIcon.svg';

export const Container = styled.div`
    display: flex;
    width: 330px;
    height: 80px;
    padding: 15px 10px;
    background-color: var(--white);
    h4 {
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
    .imgBox {
        background: ${(props) => props.type ? `url(${HabitIcon})` : `url(${GroupIcon})`};
        width: 50px;
        margin-right: 10px;
    }

    a {
        cursor: pointer;
    }

    :hover {
        border: 2px solid var(--color-secondary);
    }
`;