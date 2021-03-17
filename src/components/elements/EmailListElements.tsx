import styled from 'styled-components'

export const EmailListContainer = styled.div`
  flex: 1;
  overflow: scroll;
  .settings-container {
    padding: 2px 0;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 1px solid whitesmoke;
    z-index: 999;
    padding-right: 10px;
  }
  .category-sections {
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    z-index: 999;
    border-bottom: 1px solid whitesmoke;
  }
`
export const CategorySection = styled.section`
  border-bottom: ${(props) => `3px solid ${props.color}`};
  display: flex;
  align-items: center;
  padding: 10px;
  min-width: 200px;
  cursor: pointer;
  h4 {
    font-size: 14px;
    margin: 15px 2px;
    font-weight: 500;
  }
  &.category--active {
    color: ${(props) => props.color};
    background-color: whitesmoke;
    border-width: 3px;
  }
  &:hover {
    background-color: whitesmoke;
    border-width: 3px;
  }
`
