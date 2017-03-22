/**
 * Created by Marcin on 18.03.2017.
 */
import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={props.etag}
                video={video}
            />
        )
    });

    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    )
};

export default VideoList;