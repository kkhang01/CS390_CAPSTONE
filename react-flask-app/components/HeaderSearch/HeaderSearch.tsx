import { Autocomplete, Group, Burger, rem, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';
import Image from 'next/image';
import classes from './HeaderSearch.module.css';
import StOlafParking from './logo.png';
import Link from 'next/link'

export function HeaderSearch() {
  const [opened, { toggle }] = useDisclosure(false);
  const myImageStyle = { width: '250px', height: '70px', padding: 4};


  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Image style={myImageStyle} src={StOlafParking}/>
        <Group ml={50} gap={50} className={classes.links} visibleFrom="sm">
          <Button component={Link} href="/"> Home </Button>
        <Button component={Link} href="/diy"> Test Model </Button>
          </Group>

      </div>
    </header>
  );
}
