import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channlDetail,setChannelDetail] = useState(null)
    const [videos,setVideos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then( (data) => setChannelDetail(data?.items[0]))

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then( (data) => setVideos(data?.items))
    }, [id])
    return (
        <Box minHeight={"95vh"}>
            <Box>
                <div 
                    style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,0,104,1) 0%, rgba(1,112,151,1) 93%, rgba(1,104,143,1) 96%)',
                        zIndex:10,
                        height:"300px"
                    }}
                />
                <ChannelCard channelDetail={channlDetail} marginTop={'-110px'} />
            </Box>
            <Box display={"flex"} p={"2"}>
                <Box sx={{ mr: { sm: "100px" } }}/>
                    <Videos videos={videos} direction={"row"} />
            </Box>
        </Box>
    );
};

export default ChannelDetail;