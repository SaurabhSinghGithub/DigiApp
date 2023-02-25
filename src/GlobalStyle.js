import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html {
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

body {
    overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 2rem;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}


.center{
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 5rem;
}

h1 {

    font-size: 2.5rem;
    margin: .5rem 0;

}

h3 {
    font-size: 1.3rem;
}

p {
    font-size: 1rem;
}


li {
    list-style: none;
}

a{
    text-decoration: none;
}

.container {
    max-width: 120rem;
    margin: 10rem auto;
}

.flex {
    display: flex;
    gap: 3rem;
    justify-content: space-between;
    align-items: center;
}


.grid {
    display: grid;
    gap: 4rem;
    align-items: center;
}
.grid-2 {
    grid-template-columns: 1fr 1fr;
}
.grid-3 {
    grid-template-columns: 1fr 1fr 1fr;
}
.grid-4 {
    grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media(max-width: ${({ theme }) => theme.media.mobile}){

html {
    font-size: 50%;
}

@media(max-width: 500px){
    .heroImage{
        display: none;
    }
    .fx{
        grid-template-columns: 1fr;
    }
}

}


`
