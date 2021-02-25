import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { SidebarOption } from './elements'

export interface PanelOptionProps {
  Icon: React.ReactElement<SvgIconProps>
  title: string
  number: number
  isActive?: boolean
}

export const PanelOption = ({
  Icon,
  title,
  number,
  isActive = false,
}: PanelOptionProps) => (
  <SidebarOption className={isActive ? 'option--active' : ''}>
    {Icon}
    <h3>{title}</h3>
    <p>{number}</p>
  </SidebarOption>
)
