import styled from 'styled-components';

export const Container = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    background-color: var(--secondary-color);

    .logo img {
        height: 40px;
    }

    .footer-container {
        display: flex;
        align-items: flex-start;
        gap: 140px;
    }

    .footer-navigation ul {
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .footer-navigation ul li {
        width: 295px;
    }

    .footer-navigation ul li a {
        color: var(--primary-color);
    }

    .footer-navigation ul li a:hover {
        text-decoration: underline;
    }

    @media screen and (max-width: 1000px) {
        
        .footer-container {
            flex-direction: column;
            gap: 30px;
        }
    }
`;