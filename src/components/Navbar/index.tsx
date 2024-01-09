import { Button, Flex } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import './index.scss'

export default function Navbar() {
  return (
    <Flex className='navbar' align={'center'} justify={'between'}>
        <h3>Phowwcase</h3>
        <Flex gap={'2'}>
            <Button><GitHubLogoIcon/> Github repo</Button>
            <Button variant='soft'>Github repo</Button>
        </Flex>
    </Flex>
  )
}
