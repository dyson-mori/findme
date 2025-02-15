import { FC, Suspense } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useTheme } from 'styled-components';

import { User } from '@svg';

import { Container, Logo as LogoStyled, Nav } from './styles';

// import Users from './creator';
// import Settings from './settings';
// import Authentication from './auth';

const links = [
  {
    path: '/',
    name: 'Maps'
  },
  // {
  //   path: '/videos',
  //   name: 'Videos'
  // },
  // {
  //   path: '/posts',
  //   name: 'Posts'
  // },
  // {
  //   path: '/category',
  //   name: 'Categories'
  // },
  // {
  //   path: '/donate',
  //   name: 'Donate Us'
  // }
];

interface Props {
  // user: UserProps;
  // users: UserProps[];
};

export const Header: FC<Props> = ({ }) => {
  const theme = useTheme();
  const path = usePathname();

  const hide = path.includes('/s') || path.includes('/upload');

  return !hide && (
    <Suspense fallback={<>load</>}>
      <Container>
        {/* <LogoStyled>
          <Logo width={30} height={30} stroke={theme.colors.primary} strokeWidth={15} />
        </LogoStyled> */}

        <Nav>
          {
            links.map(row => (
              <Link
                key={row.path}
                href={{ pathname: row.path }}
                style={{
                  color: theme.colors[path === row.path ? 'primary' : 'text'],
                  fontWeight: path === row.path ? 600 : 400
                }}
              >
                {row.name}
              </Link>
            ))
          }
        </Nav>

        <Link href={{ pathname: '/auth' }}>
          <User width={20} height={20} strokeWidth={1.8} />
        </Link>

        {/* <Users users={users} />
        <Settings /> */}
        {/* <Authentication user={user} /> */}
      </Container>

    </Suspense>
  )
};
