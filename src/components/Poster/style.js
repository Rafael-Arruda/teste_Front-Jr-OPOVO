import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 20px;

    .section-header {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .section-header h2 {
        color: var(--primary-color);
        font-weight: 100;
    }

    .section-header span {
        font-size: 22px;
        color: var(--quaternary-color);
    }

    .section-header button {
        padding: 10px 20px 8px 20px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .poster-list {
        margin-top: 15px;
        overflow: hidden;
        display: flex;
        gap: 15px;
    }

    .carousel {
        position: relative;
    }
    .box-shadow-left, .box-shadow-right {
        position: absolute;
        z-index: 999;
    }
    .box-shadow-left {
        height: 100%;
        left: 0px;
        top: 0;
    }
    .box-shadow-right {
        height: 100%; 
        right: 0px;
        top: 0;
    }
`;