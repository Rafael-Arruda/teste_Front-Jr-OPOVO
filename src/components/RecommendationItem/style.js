import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    .poster {
        width: 190px;
        height: 285px;
        border-radius: 10px;
        background-image: ${props => props.poster? `url(https://image.tmdb.org/t/p/w500/${props.poster})`: ``};
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .title {
        text-align: center;
        line-height: 20px;
        color: var(--secondary-color);
        font-weight: 600;
    }
    .vote {
        color: var(--secondary-color);
    }
`;