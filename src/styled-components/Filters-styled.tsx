import styled from 'styled-components'

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`
export const Form = styled.div`
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, .0);
  border-radius: 10% 10% 20% 35%;
  background-color: rgb(82 41 200 / 14%);
  position: relative;
  top: 0;
  width: fit-content;
  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, .3);
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    margin: 5px;
    width: 80%;
    max-width: 80%;
    flex-direction: column;
  }
`

export const RadioField = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 2rem;
  
  label {
    color: wheat;
  }
  @media (max-width: 750px) {
   display: inline-flex;
    margin: 1rem;
    flex-wrap: wrap;
  }
`
export const RadioInput = styled.input`
  visibility: hidden;

  &[type='radio']:after {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    top: -0.3rem;
    left: -0.6rem;
    position: relative;
    background-color: #d1d3d1;
    content: '';
    visibility: visible !important;
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    @media (max-width: 750px) {
      width: 1rem;
      height: 1rem;
    }
  }

  &[type='radio']:checked:after {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    top: -0.3rem;
    left: -0.6rem;
    position: relative;
    background-color: chartreuse;
    content: '';
    display: inline-block;
    visibility: visible;
    border: 2px solid white;
    @media (max-width: 750px) {
      width: 1rem;
      height: 1rem;
    }
  }
`


