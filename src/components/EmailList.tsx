import React from 'react'
import { Checkbox, IconButton } from '@material-ui/core'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import RedoIcon from '@material-ui/icons/Redo'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide'
import SettingsIcon from '@material-ui/icons/Settings'
import InboxIcon from '@material-ui/icons/Inbox'
import PeopleIcon from '@material-ui/icons/People'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'

import { EmailListContainer } from './elements'
import { EmailCategory } from './EmailCategory'

const tester = true

export const EmailList: React.FC = () => {
  return (
    <EmailListContainer>
      <div className="settings-container">
        <div className="settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDownIcon />
          </IconButton>
          <IconButton>
            <RedoIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className="settingsRight">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
          <IconButton>
            <KeyboardHideIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </div>
      </div>

      <div className="category-sections">
        <EmailCategory
          Icon={<InboxIcon />}
          title="Primary"
          color="red"
          isActive={tester}
        />
        <EmailCategory Icon={<PeopleIcon />} title="Social" color="#1A73E8" />
        <EmailCategory
          Icon={<LocalOfferIcon />}
          title="Promotions"
          color="green"
        />
      </div>
    </EmailListContainer>
  )
}
