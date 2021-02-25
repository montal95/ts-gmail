import React from 'react'
import { SvgIconProps } from '@material-ui/core/SvgIcon'

import { CategorySection } from './elements'

export interface CategoryProps {
  Icon: React.ReactElement<SvgIconProps>
  title: string
  color: string
  isActive?: boolean
}

export const EmailCategory = ({
  Icon,
  title,
  color,
  isActive = false,
}: CategoryProps) => (
  <CategorySection color={color} className={isActive ? 'category--active' : ''}>
    {Icon}
    <h4>{title}</h4>
  </CategorySection>
)
