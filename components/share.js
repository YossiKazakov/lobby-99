import { FacebookShareButton, FacebookIcon, WhatsappShareButton,  WhatsappIcon, LinkedinShareButton, LinkedinIcon, TwitterIcon, TwitterShareButton} from 'next-share';

export default function Share(){
    return (<div>
    <FacebookShareButton url={'http://google.com'} >
        <FacebookIcon size={32} round />
    </FacebookShareButton>
    <WhatsappShareButton url={'http://google.com'} >
        <WhatsappIcon size={32} round />
    </WhatsappShareButton>
    <LinkedinShareButton
        url={'http://google.com'} >
        <LinkedinIcon size={32} round />
    </LinkedinShareButton>
    <TwitterShareButton
        url={'http://google.com'} >
        <TwitterIcon size={32} round />
    </TwitterShareButton>
</div>)
}