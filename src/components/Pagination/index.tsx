import * as React from 'react'
import { stateType } from '../../state/store'
import { PageButton, PaginationContainer } from '../../styled-components/Characters-styled'
import {useActions} from "../../hooks/use-actions";
import {useTypedSelector} from "../../hooks/use-typed-selector";

export function Pagination() {

  const pageNumber = useTypedSelector((state: stateType) => state.pageNumber)
  const numberOfPages = useTypedSelector((state: stateType) => state.numberOfPages)

  const {getCharacters} = useActions();

  function showPreviousPage() {
    getCharacters(pageNumber - 1)
  }
  function showNextPage() {
    getCharacters(+pageNumber + 1)
  }

  function showTheFirstPage() {
    getCharacters(1)
  }
  function showTheLastPage() {
    if (numberOfPages) {
      getCharacters(numberOfPages)
    }
  }

  return <>
    <PaginationContainer>
      {numberOfPages ? <>
        <PageButton onClick={showTheFirstPage} color={`${pageNumber > 1 ? 'Teal' : 'Thistle'}`}>
          &#8249;&#8249;
        </PageButton>
        {pageNumber > 1 ? <PageButton onClick={showPreviousPage} color={'Teal'}>
          {pageNumber - 1}
        </PageButton> : null}
        <PageButton>{pageNumber}</PageButton>
        {pageNumber < numberOfPages ? <PageButton onClick={showNextPage} color={'Teal'}>
          {+pageNumber + 1}
        </PageButton> : null}
        <PageButton onClick={showTheLastPage} color={`${pageNumber < numberOfPages ? 'Teal' : 'Thistle'}`}>
          &#8250;&#8250;
        </PageButton></> : null}
    </PaginationContainer>
  </>
}
