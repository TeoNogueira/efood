import { createGlobalStyle } from 'styled-components'

export const colors = {
    bgColor: '#fff8f2',
    white: '#fff',
    rDark: '#e66767',
    rLight: '#ffebd9',
}

export const breakpoints = {

    desktop: '1024px',
    tablet: '768px',
    mobile: '425px'
}

export const GlobalCss = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    
}

body {

    color: ${colors.rDark};
    background: ${colors.bgColor};

}

.container {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
}

@media (max-width: ${breakpoints.desktop}) {

    max-width: 80%;
}
`
