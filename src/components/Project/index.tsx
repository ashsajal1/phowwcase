import { Avatar, Box, Card, Text, Flex, Button } from '@radix-ui/themes'
import './index.scss'
import { GitHubLogoIcon, OpenInNewWindowIcon, TwitterLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'

interface ProjectProps {
    title: string,
    description: string,
    coder: string,
    coderImg: string
}

export default function Project({ title, description, coder, coderImg }: ProjectProps) {
    return (
        <Card className='project-card'>
            <Flex align={'center'} justify={'between'}>
                <h3>{title}</h3>
                <Flex gap={'2'}>
                    <Button variant='soft' size={'1'}><OpenInNewWindowIcon /> Preview</Button>
                    <Button size={'1'}>Github repo</Button>
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

                <Flex gap={'2'}>
                    <Button variant='outline'><GitHubLogoIcon /></Button>
                    <Button variant='outline'><TwitterLogoIcon /></Button>
                    <Button variant='outline'><LinkedInLogoIcon /></Button>
                </Flex>
            </Flex>
        </Card>
    )
}
