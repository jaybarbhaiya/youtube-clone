import React, {useState} from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import {Link} from "react-router-dom";

// es7 snippit extension -> rfce command

function Header() {

	const [inputSearch, setInputSearch] = useState("");

	return (
		<div className="header">
			<div className="headerLeft">
				<MenuIcon />
				<Link to="/">
					<img className="headerLogo" src="https://cdn.pixabay.com/photo/2016/10/25/18/57/animal-1769728_960_720.png" alt="" />
				</Link>
			</div>

			<div className="headerMiddle">
				<input 
					onChange={e => setInputSearch(e.target.value)} 
					value={inputSearch}
					placeholder="Search"
					type="text"
				/>
				
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="headerMiddleSearchButton" />
				</Link>

			</div>

			<div className="headerRight">
				<VideoCallIcon className="headerRightIcons" />
				<AppsIcon className="headerRightIcons" />
				<NotificationsIcon className="headerRightIcons" />
				<Avatar alt="Jay Barbhaiya" src="https://avatars.githubusercontent.com/u/7147878?s=40&v=4" />	
			</div>
		</div>
	)
}

export default Header
