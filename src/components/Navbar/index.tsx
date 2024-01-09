import { Button, Flex } from '@radix-ui/themes'
import './index.scss'
export default function Navbar() {
  return (
    <Flex className='navbar' align={'center'} justify={'between'}>
        <h3>Phowwcase</h3>
        <Flex gap={'2'}>
            <Button>Github repo</Button>
            <Button variant='outline'>Github repo</Button>
        </Flex>
    </Flex>
  )
}
