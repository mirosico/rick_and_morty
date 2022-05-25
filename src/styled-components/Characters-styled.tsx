import styled from 'styled-components'

export const CharactersContainer = styled.div`
  align-items: center;
  justify-items: center;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 3rem;
  margin: 2rem auto 4rem;
  padding: 0;
  
  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 820px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`
export const PageButton = styled.button`
  color: ${props => props.color || 'Teal'};
  font-weight: ${props => !props.color && 'bolder'};
  background-color: white;
  background-color: ${props => !props.color && '#7fff00'};
  font-size: 1.5rem;
  border: 1px solid ${props => props.color || 'Teal'};
  border-radius: 0.2rem;
  margin: 0.05rem;
  cursor: ${props => props.color === 'Teal' ? 'pointer' : 'default'};
  padding: 1rem;
  &:hover {
    background-color: ${props => props.color === 'Teal' && 'MediumAquaMarine'};
  }
`
export const PaginationContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
`