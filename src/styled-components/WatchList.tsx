import styled from 'styled-components'

export const WatchListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  margin: 20px auto;
  background: aliceblue;
  padding: 20px;
  
  @media (max-width: 750px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
  
`

export const WatchListEpisodes = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
  padding: 0;
  width: 100%;


  li {
    display: inline-flex;
    align-items: center;
    font-size: 2rem;
    border: 2px dashed purple;
    margin: 5px;
    padding: 10px 15px;
    background: antiquewhite;
    justify-content: space-between;

    :hover {
      border: 2px solid purple;
      background: #d9a15a;
      color: aliceblue;
    }

    button {
      position: static;
      font-size: 2rem;
      line-height: 2rem;
      width: 2rem;
      height: 2rem;
      padding: 0;
      color: #fff2f2;
      background: #a50707cf;
    }

    label {
      font-family: 'Balsamiq Sans', cursive;
    }
  }
`

export const CheckBox = styled.input`
  font-size: 2rem;
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  color: purple;
`

export const ButtonField = styled.div`
  display: inline-flex;
  align-items: center;
  width: 70%;
  justify-content: center;

  @media (max-width: 750px) {
    display: flex!important;
    width: 100%;
    padding: 0;
    margin: 0;
    text-align: center;
    
    input {
      margin: 0;
    }
  }

  input[type="number"] {
    max-width: 70px;
    color: #efe2ef;
    font-weight: 600;
    background: linear-gradient(to right, red, purple);
    padding: 7px 5px;
    text-align: center;

    ::placeholder {
      color: rgba(240, 248, 255, 0.62);
    }
  }


`