import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'
import StarIcon from '@material-ui/icons/Star'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import LabelImportantIcon from '@material-ui/icons/LabelImportant'
import NearMeIcon from '@material-ui/icons/NearMe'
import NoteIcon from '@material-ui/icons/Note'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { SidebarPanel } from './elements'
import { PanelOption } from './PanelOption'

export const Sidebar: React.FC = () => {
  const tester = true

  return (
    <SidebarPanel>
      <Button startIcon={<AddIcon fontSize="large" />} id="compose">
        Compose
      </Button>

      <PanelOption
        Icon={<InboxIcon />}
        title="Inbox"
        number={54}
        isActive={tester}
      />
      <PanelOption Icon={<StarIcon />} title="Starred" number={54} />
      <PanelOption Icon={<AccessTimeIcon />} title="Snoozed" number={54} />
      <PanelOption
        Icon={<LabelImportantIcon />}
        title="Important"
        number={54}
      />
      <PanelOption Icon={<NearMeIcon />} title="Sent" number={54} />
      <PanelOption Icon={<NoteIcon />} title="Drafts" number={54} />
      <PanelOption Icon={<ExpandMoreIcon />} title="More" number={54} />
    </SidebarPanel>
  )
}
