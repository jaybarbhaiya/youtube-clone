import React from 'react';
import './VideoCard.css';
import Avatar from '@material-ui/core/Avatar';

function VideoCard({ thumbnail, title, channel, views, timestamp, channelImage}) {
	return (
		<div className="videoCard">
			<img className="videoCardThumbnail" src={thumbnail} alt="" />

			<div className="videoCardInfo">
				<Avatar className="videoCardAvatar" alt={channel} src={channelImage}/>

				<div className="vidoeCardText">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>{views} · {timestamp}</p>
				</div>

			</div>

		</div>
	)
}

export default VideoCard
