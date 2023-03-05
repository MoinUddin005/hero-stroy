import React from 'react';
import OwnStroy from '../OwnStroy/OwnStroy';
import RecentEpisodes from '../RecentEpisodes/RecentEpisodes';
import RecentEpisodesCard from '../RecentEpisodesCard/RecentEpisodesCard';
import Subscribe from '../Subscribe/Subscribe';


const Home = () => {
    return (
        <div>
            <OwnStroy></OwnStroy>
            <Subscribe></Subscribe>
            <RecentEpisodes></RecentEpisodes>
            <RecentEpisodesCard></RecentEpisodesCard>
            
        </div>
    );
};

export default Home;