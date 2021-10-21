import styled from 'styled-components';

export const Container = styled.main`
    margin: 65px 15px 0 10px;

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        button {
            padding: 0px 30px;
            width: 104px;
            height: 40px;
            box-sizing: border-box;
            border-radius: 8px;
            border: var(--border-width-input-button) solid var(--gray-2);
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.017em;
            color: var(--gray-1);

            :hover {
                border: 2px solid var(--color-secondary);
                color: var(--color-secondary);
                transition: 0.5s;
            }
        }
    }

    .title {
        h1 {
            font-family: Inter;
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 34px;
            letter-spacing: -0.017em;
            color: var(--color-title);
            margin-bottom: 10px;
        }

        p{
            font-weight: normal;
            font-size: 12px;
            line-height: 15px;
            letter-spacing: -0.017em;
            color: var(--color-text);
            width: max-content;
            max-width: 100%;
        }
    }
`;

export const ActivitiesTitle = styled.div`
    width: max-content;
    width: 100%;
    height: 51px;
    background-color: var(--color-tertiary);
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    border-radius: 5px;

    h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.017em;
        color: var(--white);
    }
`;

export const ActivitiesContent = styled.div`
    width: max-content;
    width: 100%;
    background: var(--gray-2);
    padding: 10px;
    margin: 5px 0;

    p {
        margin: 10px 0;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.017em;
        color: var(--color-text);
    }
`;

export const GoalsTitle = styled.div`
    width: max-content;
    width: 100%;
    height: 51px;
    background-color: var(--color-quaternary);
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 10px;
    border-radius: 5px;

    h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.017em;
        color: var(--white);
    }
`;

export const GoalsContent = styled.div`
    width: max-content;
    width: 100%;
    background: var(--gray-2);
    padding: 10px;
    margin: 5px 0;

    p {
        margin: 10px 0;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: -0.017em;
        color: var(--color-text);
    }
`;
