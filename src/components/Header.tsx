import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import ArrowDropDownIc from '@material-ui/icons/ArrowDropDown'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { IconButton, Avatar } from '@material-ui/core'

import { HeaderContainer } from './elements'

export const Header: React.FC = () => (
  <HeaderContainer>
    <div className="left_header">
      <IconButton>
        <MenuIcon />
      </IconButton>
      <img
        src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
        alt="Gmail Logo"
      />
    </div>
    <div className="middle_header">
      <SearchIcon />
      <input type="text" placeholder="Search Mail" />
      <ArrowDropDownIc className="header_inputCaret" />
    </div>
    <div className="right_header">
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Avatar />
    </div>
  </HeaderContainer>
)
