import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
	return (
		<div className="searchPage">
			<div className="searchPageFilter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>

			<hr />

			<ChannelRow
				image="https://yt3.ggpht.com/ytc/AAUvwnhsADVAKKs0C5VSKAFBYSVLW9Zd58kbZs3qgIHwYTY=s88-c-k-c0x00ffffff-no-rj"
				channel="Jay Barbhaiya"
				verified
				subs="0"
				noOfVideos={0}
				description="Some description"
			/>

			<hr />

			<VideoRow
				views="71"
				subs="0"
				description="Some other description on the video"
				timestamp="7 years ago"
				channel="Jay Barbhaiya"
				title="SRH Dudes"
				thumbnail="https://i9.ytimg.com/vi/IEWIz21D5rw/mqdefault.jpg?time=1619529900000&sqp=CKyhoIQG&rs=AOn4CLDBVNCRws2DL_HBLYaQnolJV3TiRg"
			/>
		</div>
	);
}

export default SearchPage;
