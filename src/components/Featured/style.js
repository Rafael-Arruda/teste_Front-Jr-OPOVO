import styled from 'styled-components';

export const Container = styled.div` 
    padding: 100px 0px;

    .container-information {
        display: flex;
        gap: 20px;
    }
    .poster {
        border-radius: 10px;
        width: 280px;
        height: 380px;
        min-width: 250px;
        background-image: ${props => props.poster? `url(https://image.tmdb.org/t/p/w500/${props.poster})`: ``};
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .box-title {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 20px;
    }
    .box-title h2 {
        color: var(--primary-color);
    }
    .box-title span {
        color: #DAC0A3;
        font-size: 28px;
    }
    .box-overview {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    .box-overview h4 {
        color: var(--primary-color);
    }

    .box-extra-information {
        display: flex;
        flex-direction: column;
    }
    .box-extra-information div {
        width: 100%;
        display: flex;
    }

    @media screen and (max-width: 768px){
        padding: 50px 0px;

        .container-information {
            flex-direction: column;
            align-items: center;
        }
        .box-title {
            justify-content: center;
        }
    }
    
    @media screen and (max-width: 600px){
        .box-extra-information div {
            flex-wrap: wrap;
        }
    }
`;