import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 70px;

    .section-header {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    .section-header h2 {
        color: var(--primary-color);
    }

    .section-header button {
        padding: 10px 20px 8px 20px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .review-list {
        overflow: hidden;
        margin-top: 20px;
        display: flex;
        gap: 20px;
        list-style: none;
    }

    @media screen and (max-width: 768px){

        .review-list {
            flex-wrap: wrap;
        }
    }
`;