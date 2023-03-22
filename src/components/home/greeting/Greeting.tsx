import { Box, GreetingSpan } from './GreetingStyled';

type GreetingProps = {
  user: string;
};

export const Greeting = ({ user }: GreetingProps) => {
  return (
    <Box>
      <GreetingSpan>Hello, {user}.</GreetingSpan>
      <GreetingSpan>Welcome to Sticky Note App</GreetingSpan>
    </Box>
  );
};
