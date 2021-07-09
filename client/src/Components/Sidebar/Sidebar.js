import React from 'react';
import './Sidebar.css';
import { FaTwitter, FaHome, FaSearch, FaRegListAlt, FaRegUser } from 'react-icons/fa';
import SidebarOption from './SidebarOption';
import { IoNotificationsOutline } from 'react-icons/io5';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiOutlineMail, HiOutlineBookmark} from 'react-icons/hi';



// import { Button } from "@material-ui/core";

export default function Sidebar() {
    return (
        <div >
            <FaTwitter className="sidebar__twitterIcon"/>
            <SidebarOption text="Home" Icon={FaHome}/>
            <SidebarOption text="Explore" Icon={FaSearch}/>
            <SidebarOption text="Notifications" Icon={IoNotificationsOutline}/>
            <SidebarOption text="Messages" Icon={HiOutlineMail}/>
            <SidebarOption text="Bookmarks" Icon={HiOutlineBookmark}/>
            <SidebarOption text="Lists" Icon={FaRegListAlt}/>
            <SidebarOption text="Profile" Icon={FaRegUser}/>
            <SidebarOption text="More" Icon={FiMoreHorizontal}/>

        <button className="sidebar__tweet">Tweet</button>
        {/* <TwitterIcon className="sidebar__twitterIcon" /> */}
  
        {/* <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" /> */}
  
        {/* Button -> Tweet */}
        {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button> */}
      </div>
    )
}
