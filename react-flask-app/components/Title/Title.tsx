import { Title, Text, Anchor } from '@mantine/core';
import classes from './Title.module.css';

export function Title2() {
  return (
    <>
      <Title className={classes.title} ta="left" mt={0}>
        Test the Model Yourself!{' '}
      </Title>
    </>
  );
}
