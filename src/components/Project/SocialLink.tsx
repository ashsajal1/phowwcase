import { GitHubLogoIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Button, Flex } from '@radix-ui/themes';

interface SocialLinkProps {
    githubUrl: string,
    linkedinUrl: string,
    twitterUrl: string
}

export default function SocialLink({ githubUrl, linkedinUrl, twitterUrl }: SocialLinkProps) {
    return (
        <Flex gap={'2'}>
            <a title={githubUrl} href={githubUrl} target='_blink'>
                <Button variant='outline'><GitHubLogoIcon /></Button>
            </a>
            <a title={twitterUrl} href={twitterUrl} target='_blink'>
                <Button variant='outline'><TwitterLogoIcon /></Button>
            </a>
            <a title={linkedinUrl} href={linkedinUrl} target='_blink'>
                <Button variant='outline'><LinkedInLogoIcon /></Button>
            </a>
        </Flex>
    )
}
