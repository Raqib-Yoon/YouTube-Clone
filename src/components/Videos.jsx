import React from 'react'

import { Stack, } from '@mui/material'
import { VideoCard, ChannelCard } from "./"
import { FetchFromApi } from './utils/FetchFromApi'


const Videos = ({ videos, direction }) =>

(
    <Stack
        direction={direction ? "column" : { xs: 'column', sm: "row" }}
        sx={{
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: { xs: 'center', sm: undefined },
            justifyContent: { xs: undefined, sm: 'center' }
        }}
    >


        {
            videos?.items?.map((item, idx) =>
            (
                <>

                    {item.id.videoId && <VideoCard
                        video={item}
                    />}
                    {item.id.channelId && <ChannelCard
                        channelDetail={item}
                    />}




                </>
            )
            )
        }
    </Stack >
)


export default Videos
