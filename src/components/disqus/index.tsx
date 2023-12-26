/* eslint-disable @typescript-eslint/no-explicit-any */
import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';

const DisqusComponent = () => {

    const location = useLocation();
    const { search } = location;

    const regexId = /(?:\?|&)id=([^&?]+)/;
    const matchId = regexId.exec(search);
    const getId = matchId ? matchId[1] : 0;

    return (
        <>
            <div className='w-full sm:px-8 px-16 pt-8 pb-32'>
                <DiscussionEmbed
                    shortname={`example`}
                    config={
                        {
                            url: `https://lodisia-netlify-app.disqus.com/embed.js`,
                            identifier: `${getId}`,
                            title: 'komentar',
                            language: 'id' // indonesia language
                        }
                    }
                />
            </div>
        </>
    )
}

export default DisqusComponent