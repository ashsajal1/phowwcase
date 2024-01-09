import { Avatar, Box, Card, Text, Flex, Button } from '@radix-ui/themes'
import './index.scss'
import { OpenInNewWindowIcon } from '@radix-ui/react-icons'
import SocialLink from './SocialLink'

interface ProjectProps {
    title: string,
    description: string,
    coder: string,
    coderImg: string,
    githubUrl: string,
    linkedinUrl: string,
    twitterUrl: string,
    previewUrl: string | null,
    githubRepo: string
}

export default function Project({ title, description, coder, coderImg, githubUrl, linkedinUrl, twitterUrl, previewUrl, githubRepo }: ProjectProps) {
    return (
        <Card className='project-card'>
            <Flex align={'center'} justify={'between'}>
                <h3>{title}</h3>
                <Flex gap={'2'}>
                    {previewUrl && (
                        <a target='_blink' href={previewUrl}>
                            <Button variant='soft' size={'1'}><OpenInNewWindowIcon /> Preview</Button>
                        </a>
                    )}
                    <a target='_blink' href={githubRepo}>
                        <Button size={'1'}>Github repo</Button>
                    </a>
                </Flex>
            </Flex>

            <Text size={'2'}>{description}</Text>
            <Flex style={{ paddingTop: '2px' }} gap={'2'}>
                <Text className='text' size={'1'}>#javascript</Text>
                <Text size={'1'}>#react</Text>
                <Text size={'1'}>#tailwindcss</Text>
            </Flex>

            <Flex gap="3" align="center" justify={'between'}>
                <Flex gap="3" align="center">
                    <Avatar
                        size="2"
                        src={coderImg}
                        radius="full"
                        fallback="T"
                    />
                    <Box>
                        <Text as="div" size="2" weight="bold">
                            {coder}
                        </Text>
                        <Text as="div" size="2" color="gray">
                            Engineering
                        </Text>
                    </Box>
                </Flex>

                <SocialLink githubUrl={githubUrl} linkedinUrl={linkedinUrl} twitterUrl={twitterUrl} />
            </Flex>
        </Card>
    )
}
