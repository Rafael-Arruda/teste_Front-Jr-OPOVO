import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 70px;
    padding-top: 30px;
    padding-bottom: 30px;
    background: var(--primary-color);

    .section-header h2 {
        color: var(--secondary-color);
    }

    .recommendation-list {
        overflow: hidden;
        margin-top: 20px;
        display: flex;
        gap: 20px;
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
        left: -1px;
        top: 0;
    }
    .box-shadow-right {
        height: 100%; 
        right: -1px;
        top: 0;
    }
`;