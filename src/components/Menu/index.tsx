import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextFieldInput } from "@radix-ui/themes";

export default function Menu() {
  return (
    <Flex style={{padding: "6px"}} align={'center'} gap={'2'} justify={'between'}>
        <Flex gap={'1'}>
            <Button variant="outline"><MixerHorizontalIcon /> Filter </Button>
            <Button variant="soft">Javascript </Button>
            <Button variant="soft">React </Button>
            <Button variant="soft">Vue </Button>
        </Flex>
        <Flex gap={'2'}>
            <TextFieldInput />
            <Button><MagnifyingGlassIcon /> Search</Button>
        </Flex>
    </Flex>
  )
}
