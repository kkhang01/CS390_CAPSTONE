import { Title, Text, Anchor } from '@mantine/core';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="left" mt={0}>
        Track Parking Spaces{' '}
      </Title>
    </>
  );
}
