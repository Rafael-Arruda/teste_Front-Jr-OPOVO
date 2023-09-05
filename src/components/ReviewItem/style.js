import styled from 'styled-components';

export const Container = styled.li`
    width: 610px;
    background: var(--tertiary-color);
    padding: 20px;
    border-radius: 10px;

    p {
        line-height: 22px;
        margin-bottom: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 7;
        -webkit-box-orient: vertical;
    }
    strong {
        color: var(--primary-color);
    }

    .extra-information {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px){
        width: 100%;
    }
`;