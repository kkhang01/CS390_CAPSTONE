import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch'
import { DropzoneButton } from '../components/DropzoneButton/DropzoneButton'
import { Title2 } from '../components/Title/Title'
import { Flex, Text, Group, Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <Stack>
      < HeaderSearch />
      <Title2/>
      <DropzoneButton/>
    </Stack>
  );
}
