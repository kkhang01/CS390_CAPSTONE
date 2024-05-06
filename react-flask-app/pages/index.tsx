import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch'
import { TableReviews } from '../components/TableReviews/TableReviews'
import { Welcome } from '../components/Welcome/Welcome'

import { Flex, Text, Group, Stack } from '@mantine/core';

export default function HomePage() {
  return (
    <Stack>
      < HeaderSearch />
      < Welcome />
      < TableReviews />
    </Stack>
  );
}
