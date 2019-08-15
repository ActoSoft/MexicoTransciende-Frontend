import React, { createContext } from 'react'
import Sidebar from './sidebar'

const SidebarContext = createContext(null)

// eslint-disable-next-line react/display-name
export const withSidebar = Component => props =>
    <SidebarContext.Provider value={ new Sidebar() }>
        <SidebarContext.Consumer>
            {
                sidebar => <Component
                    {...props}
                    sidebar={sidebar}
                />
            }
        </SidebarContext.Consumer>
    </SidebarContext.Provider>
export default SidebarContext