import styled from 'styled-components'

export const SidebarPanel = styled.div`
  padding-right: 5px;
  flex: 0.3;
  max-width: 300px;
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
  .MuiSvgIcon-root {
    margin-left: 5px;
  }
  h3 {
    flex: 1;
    margin-left: 10px;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 26px;
  }
  p {
    display: none;
    font-weight: 300;
  }
  &:hover > p,
  &.option--active > p {
    display: inline;
  }
  &:hover,
  &:hover > p,
  &:hover > h3 {
    background-color: whitesmoke;
    color: #818181;
    font-weight: 800;
  }
  &.option--active,
  &.option--active > p,
  &.option--active > h3 {
    background-color: #fcecec !important;
    color: #c04b37;
    font-weight: 800;
  }
`
export const SidebarFooter = styled.div`
  display: flex;
  justify-content: center;
`
