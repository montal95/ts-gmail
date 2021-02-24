import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { SidebarOption } from './elements'

interface OptionPropTypes {
  Icon: React.ReactElement<SvgIconProps>
  title: string
  number: number
}

export const PanelOption = ({ Icon, title, number }: OptionPropTypes) => (
  <SidebarOption>
    {Icon}
    <h3>{title}</h3>
    <p>{number}</p>
  </SidebarOption>
)
