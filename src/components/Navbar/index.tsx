import { Button, Flex } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import './index.scss'

export default function Navbar() {
  return (
    <Flex className='navbar' align={'center'} justify={'between'}>
      <h3 className='logo'>Phowwcase</h3>
      <Flex gap={'2'}>
        <a href="https://github.com/ashsajal1/phowwcase">
          <Button><GitHubLogoIcon /> Github repo</Button>
        </a>
        <a href="https://x.com/ashsajal1">
          <Button variant='soft'>Twitter</Button>
        </a>
      </Flex>
    </Flex>
  )
}
