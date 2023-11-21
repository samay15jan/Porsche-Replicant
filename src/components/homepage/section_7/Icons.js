import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styled from 'styled-components'
import tw from 'twin.macro'

const Button = styled.button`
  ${tw`hover:bg-slate-200 text-black bg-white rounded-md p-4 mr-2 mt-8`}
`

const Icons = () => {
    const icons = [FacebookIcon, InstagramIcon, YouTubeIcon, TwitterIcon, LinkedInIcon]
    return (
        <div>
            {icons.map((Icon, index) => (
                <Button className=''>
                    <Icon key={index} />
                </Button>
            ))}
        </div>
    )
}

export default Icons