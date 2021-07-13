import React from 'react';
import './Home.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import Feed from '../Components/Feed/Feed';
import Widgets from '../Components/Widgets/Widgets';

export default function Home() {
    return (
        <div className="app">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}
