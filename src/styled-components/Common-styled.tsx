import styled from 'styled-components'

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  padding: 0.4rem;
  border: none;
  background: chartreuse;
  color: gray;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.6rem;
  width: 2.2rem;
  height: 2.2rem;
  font-weight: bold;
  &:hover {
    color: rgb(27, 6, 189);
  }
  @media (max-width: 750px) {
    padding: 0.2rem 0.5rem;
    background-color: whitesmoke;
    border: 1px solid gray;
    border-radius: 50%;
  }
`

export const SubmitButton = styled.button`
  display: block;
  max-width: 100px;
  background-color: chartreuse;
  color: gray;
  padding: 0.7rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  margin: 0.3rem;
`

export const ClearButton = styled(SubmitButton)`
  width: auto;
  height: fit-content;
  color: rgb(34, 156, 119);
  background-color: rgb(230, 252, 234);
  &:hover {
    background-color: white;
  }
`
export const DisabledButton = styled(SubmitButton)`
  background-color: #bbb;
  color: white;
  cursor: default;
`



export const TextInput = styled.input`
  border: 1px solid gray;
  border-radius: 0.2rem;
  width: 95%;
  font-size: 1rem;
  padding: 0.3rem;
  color: #444;
  height: 1.5rem;
`

export const InputTitle = styled.h4`
  margin: 0.2rem 0;
  text-align: left;
  padding: 0;
  font-size: 2rem;
  font-weight: bolder;
`
