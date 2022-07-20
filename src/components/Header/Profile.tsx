import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align='center'>
      <Box mr='4' textAlign='right'>
        <Text>Pedro Henrique</Text>
        <Text color='gray.300' fontSize='small'>
          pedro.avare01@gmail.com
        </Text>
      </Box>

      <Avatar
        size='md'
        name='Pedro Henrique'
        src='https://github.com/pedrohenriiz.png'
      />
    </Flex>
  );
}
