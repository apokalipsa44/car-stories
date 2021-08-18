import React from 'react'
import { NavItem, NavMenu, OutlineButton } from 'tailwind-react-ui'

function Navigation() {
    return (
        <NavMenu>
        <NavMenu is="a" href="#header" active>
          Docs
        </NavMenu>
        <NavItem text='{['white', 'xl']}' is="a" href="#header">
          Examples
        </NavItem>
        <NavItem is="a" href="#header">
          Blog
        </NavItem>
        <OutlineButton border="white" text="white" text-hocus="blue">
          Download
        </OutlineButton>
      </NavMenu>
    )
}

export default Navigation
