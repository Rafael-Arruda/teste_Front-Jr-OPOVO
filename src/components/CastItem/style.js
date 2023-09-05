import styled from 'styled-components';

export const ListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    .character-profile {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background-image: ${props => props.background? `url(https://image.tmdb.org/t/p/w500/${props.background})`: ``};
        background-position: center 20%;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .cast-name {
        margin-top: 20px;
        color: #333333;
        font-weight: bold;
        font-size: 16px;
        text-align: center;
    }

    .cast-character {
        margin-top: 10px;
        color: #333333;
    }
`;