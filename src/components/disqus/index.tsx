import { DiscussionEmbed } from 'disqus-react';
import { useLocation } from 'react-router-dom';
const DisqusComponent = () => {
    const location = useLocation();
    const { search } = location;

    const regexId = /(?:\?|&)id=([^&?]+)/;
    const matchId = regexId.exec(search);
    const getId = matchId ? matchId[1] : 0;

    return (
        <div className='w-full px-8'>
            <DiscussionEmbed
                shortname={`example`}
                config={
                    {
                        url: `https://lodisia-netlify-app.disqus.com/embed.js`,
                        identifier: `${getId}`,
                        title: 'komentar',
                        language: 'id' //e.g. for Traditional Chinese (Taiwan)	
                    }
                }
            />
        </div>
    )
}

export default DisqusComponent