import styled from 'styled-components'

export const MainContainer = styled.div`
  font-family: 'Helvetica', 'Arial', sans-serif;
  color: palevioletred;
  display: block;
  padding: 0;
  width: 100%;
  text-align: center;
  
  h1 {
    text-transform: uppercase;
    font-family: RickAndMortyFontTrue;
    font-size: 4.5rem;
    margin-top: 5.5rem;
    color: #9217c9;
    text-shadow: -2px 3px 2px #7fff00;
    font-weight: 500;
  }
  
  @media (max-width: 750px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    h1 {
      margin-top: 5rem;
      font-size: 3.5rem;
    }
  }
`

export const HeaderWrap = styled.header`
  position: relative;
  top: 1rem;
  left: 0;
  width: 100%;
  display: block;
  padding: 0;

  a {
    font-family: Arial;
    font-weight: 700;
    text-transform: uppercase;
    -webkit-text-decoration: none;
    text-decoration: none;
    padding: 2rem 1rem 3rem 1rem;
    margin: 30px 40px;
    background: ${props => props.color || '#181c157a'};
    border: 2px dashed chartreuse;
    border-radius: 0% 0% 50% 50%;
    color: rgb(127 255 0);
    font-size: 1rem;

    &:hover {
      background: rgba(24, 28, 21, 0.88);
      padding: 2rem 1rem 2rem 1rem;
    }
  }

  ul {
    list-style: none;
    display: inline-flex;
    align-items: center;
  }

  @media (max-width: 750px) {
  }
`

export const Footer = styled.footer`
  margin: 1rem auto;
  text-align: center;
  line-height: 2rem;
  font-size: 2rem;
  color: gray;
`