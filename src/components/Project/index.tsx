import { Avatar, Box, Card, Text, Flex, Button } from '@radix-ui/themes'
import './index.scss'
import { OpenInNewWindowIcon,DownloadIcon } from '@radix-ui/react-icons'
import SocialLink from './SocialLink'
import { useRef } from 'react'
import { toPng } from 'html-to-image';

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
    const cardRef = useRef(null);

    const handleDownload = () => {
        if (cardRef.current) {
            toPng(cardRef.current)
                .then(function (dataUrl) {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'project-card.png';
                    link.click();
                })
                .catch(function (error) {
                    console.error('Error capturing element:', error);
                });
        }
    };

    return (
        <Card ref={cardRef} className='project-card'>
            <Flex align={'center'} justify={'between'}>
                <h3>{title}</h3>
                <Flex gap={'2'}>
                    <Button onClick={handleDownload} variant='soft' size={'1'}><DownloadIcon /></Button>
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
                <Text className='text' size={'1'}>#react</Text>
                <Text className='text' size={'1'}>#tailwindcss</Text>
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
