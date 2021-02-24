import styled from 'styled-components'

export const SidebarPanel = styled.div`
  #compose {
    margin: 15px 0 10px 15px;
    text-transform: capitalize;
    color: gray;
    padding: 15px;
    border-radius: 30px;
    box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.75);
  }
`
export const SidebarOption = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 10px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  cursor: pointer;
  color: #81818181;
  &:hover,
  p:hover,
  h3:hover {
    background-color: #fcecec;
    color: #c04b37;
    font-weight: 800;
  }
  .MuiSvgIcon-root {
    margin-left: 5px;
  }
  h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 26px;
  }
  p {
    display: none;
    font-weight: 300;
  }
  &:hover p {
    display: inline;
  }
`