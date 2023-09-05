import styled from 'styled-components';

export const Container = styled.div`
    background: var(--tertiary-color);
    padding-top: 30px;
    padding-bottom: 50px;

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

    .castList {
        margin-top: 20px;
        display: flex;
        gap: 20px;
        overflow: hidden;
        overflow-x: auto;
    }
    .castList::-webkit-scrollbar {
        display: none;
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