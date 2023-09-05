import styled from 'styled-components';

export const Container = styled.header`
    height: 100px;
    background: var(--primary-color);
    display: flex;
    align-items: center;
    position: relative;

    .menu-hamburguer {
        cursor: pointer;
        display: none;
    }

    .logo img {
        height: 40px;
    }

    .container-menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navigation-menu {
        display: flex;
        gap: 20px;
    }
    .navigation-menu a {
        text-decoration: none;
        color: var(--secondary-color);
    }

    @media screen and (max-width: 768px){
        .menu-hamburguer {
            display: flex;
        }
        .navigation-menu {
            display: none;
        }

        .navigation-menu-mobile {
            display: flex;
            gap: 20px;           
            background: var(--primary-color);
            position: absolute;
            right: 0;
            top: 100px;
            flex-direction: column;
            width: 150px;
            padding: 20px 30px 20px 30px;
            border-radius: 0px 0px 0px 20px;
        }
        .navigation-menu-mobile a {
            text-decoration: none;
            color: var(--secondary-color);
        }
    }
`;