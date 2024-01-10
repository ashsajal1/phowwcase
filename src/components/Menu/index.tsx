import { MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextFieldInput } from "@radix-ui/themes";
import React from "react";
import { useSearchContext } from "../../hooks/userSearch";

export default function Menu() {

  const { searchTerm, setSearchTerm, handleSearch } = useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <Flex style={{ padding: "6px", }} align={'center'} gap={'2'} justify={'between'}>
      <Flex gap={'1'}>
        <Button variant="outline"><MixerHorizontalIcon /> Filter </Button>
        <Flex display={{ xs: "none", sm: 'flex' }} gap={'1'} align={'center'}>
          <Button variant="soft">Javascript </Button>
          <Button variant="soft">React </Button>
          <Button variant="soft">Vue </Button>
        </Flex>
      </Flex>
      <Flex gap={'2'}>
        <TextFieldInput value={searchTerm} onChange={handleChange} />
        <Button onClick={handleSearch}><MagnifyingGlassIcon /> Search</Button>
      </Flex>
    </Flex>
  )
}
