import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Icons = () => {
    const icons = [FacebookIcon, InstagramIcon, PinterestIcon, YouTubeIcon, TwitterIcon, LinkedInIcon]
    return (
        <div>
            {icons.map((Icon, index) => (
                <button className='hover:bg-slate-200 text-black bg-white rounded-md p-4 mr-2 mt-8'>
                    <Icon key={index} />
                </button>

            ))}
        </div>
    )
}

export default Icons