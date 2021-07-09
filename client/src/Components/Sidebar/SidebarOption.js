import React from 'react'
import './SidebarOption.css'

export default function SidebarOption({active, text, Icon}) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
            <Icon className="myreact-icons"/>
            <h2>{text}</h2>
            
        </div>
    )
}
