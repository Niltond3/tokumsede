import React from 'react';
import Container from 'app/components/Ui/Layout/Container'
import NavBar, { entry } from 'app/components/Ui/Navigation/NavBar';

const entrys: entry[] = [
  {
    href: '#',
    title: 'Quick reference',
    level: 'primary'
  },
  {
    href: '#',
    title: 'Basic usage',
    level: 'primary'
  },
  {
    href: '#',
    title: 'Starting color',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Ending color',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Middle color',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Fading to transparent',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Applying conditionally',
    level: 'primary'
  },
  {
    href: '#',
    title: 'Hover, focus, and other states',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Breakpoints and media queries',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Using custom values',
    level: 'primary'
  },
  {
    href: '#',
    title: 'Customizing your theme',
    level: 'secondary'
  },
  {
    href: '#',
    title: 'Arbitrary values',
    level: 'secondary'
  }
];
export default function RightBar() {
  return (
    <Container className="color__transparent right-0 transition-slow" type='Aside'>
      <NavBar theme="TableOfContents" entrys={entrys}></NavBar>
    </Container>
  );
}
