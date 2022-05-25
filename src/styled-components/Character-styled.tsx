import styled from 'styled-components'

export const CharacterInfo = styled.div`
  font-size: 1rem;
  min-width: 15rem;
  max-width: 80%;
  min-height: 18rem;
  background: chartreuse;
  margin: 0 auto;
  border: 1px solid rgba(103, 126, 58, 0.85);
  border-radius: 0.4rem;
  color: rgb(86, 92, 88);
  box-shadow: 0rem 0rem 0.5rem 0.5rem rgba(109, 38, 218, 0.78);
  
  @media (max-width: 750px) {
    min-width: 8rem;
  }
  @media (max-width: 450px) {
    min-height: 8rem;
    width: 100%;
  }
`
export const CharacterImage = styled.img`
  cursor: pointer;
  margin: 0rem;
  display: block;
  width: 100%;
  object-fit: cover;
  border: none;
  border-radius: 0.1rem;
  opacity: 0.95;
  &:hover {
    opacity: 1.0;
  }
  @media (max-width: 750px) {
    float: left;
    min-height: 100%;
    opacity: 1.0;
  }
`

export const ButtonToOpenDetails = styled.button`
  display: block;
  background-color: rgba(27, 6, 189, 0.0);
  color: gray;
  border: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  cursor: pointer;
  h4 {
    font-size: 1.3rem;
    line-height: 1.3rem;
    padding: 0;
    margin: 1rem 0;
    @media (max-width: 400px) {
      font-size: 1rem;
    }
  }
  &:hover {
    color: rgb(168, 15, 115);
  }
`

export const SemitransparentBackgroundForModal = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(204, 235, 234, 0.4);
`

export const CharacterDetailsModal = styled(CharacterInfo)`
  font-size: 1.2rem;
  position: relative;
  margin: 5rem auto;
  border: none;
  border-radius: 0.2rem;
  width: 50%;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.3), 0 2.5rem 5rem 0 rgba(0,0,0, .3);

  @media (max-width: 750px) {
    width: 90%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-bottom: 3rem;
    margin: 5vh auto;
    overflow-y: scroll;
  }
`

export const CharacterDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1.6rem;
    margin: 0.3rem 0rem 1rem;
  }
`
export const ImageOnDetailPage = styled(CharacterImage)`
  width: auto;
  height: auto;
  margin: 0 auto;
  padding: 2rem 0 1rem;
  display: block;
  border-radius: 0.2rem;
  cursor: default;
  max-height: 200px;
  object-fit: contain;
  object-position: center;

  @media (max-width: 750px) {
    width: 90%;
    max-height: 150px;
    min-height: auto;
    margin-bottom: 1rem;
  }
`
export const StatusCircleOnDetailPage = styled.div`
  border: none;
  border-radius: 50%;
  background-color: ${props => props.color || "gray"};
  margin: 0.1rem 0.3rem;
  width: 1.3rem;
  height: 1.3rem;
  float: left;
`

export const FieldHeader = styled.h5`
  margin: 0.2rem 0;
  font-size: 0.9em;
  @media (max-width: 400px) {
    padding: 0rem;
    margin: 0rem;
  }
`
export const Field = styled.div`
  margin: 0rem 0rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    margin: 10px 0;
    flex-wrap: wrap;
    flex-direction: row;
  }
`

export const Species = styled.h4`
  font-size: 1.3rem;
  width: 50%;
  margin: 0.5rem 0.5rem 1rem;
`
export const Info = styled.div`
  font-size: 1.2rem;
  margin: 0.2rem 0.5rem;
`