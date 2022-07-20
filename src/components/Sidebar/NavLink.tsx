import { LinkProps as ChakraLinkProps } from '@chakra-ui/react';
import { Icon, Link, Text } from '@chakra-ui/react';

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType;
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display='flex' alignItems='center' {...rest}>
      <Icon as={icon} fontSize='20' />

      <Text ml='4' fontWeight='medium'>
        {children}
      </Text>
    </Link>
  );
}
