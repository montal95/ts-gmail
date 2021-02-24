import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import InboxIcon from '@material-ui/icons/Inbox'

import { SidebarPanel } from './elements'
import { PanelOption } from './PanelOption'

export const Sidebar: React.FC = () => (
  <SidebarPanel>
    <Button startIcon={<AddIcon fontSize="large" />} id="compose">
      Compose
    </Button>

    <PanelOption Icon={<InboxIcon />} title="Inbox" number={54} />
  </SidebarPanel>
)
