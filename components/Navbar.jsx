import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Link from 'next/link';

import images from '../assets';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

  console.log({ theme });
  return (
    <div>test</div>
  );
};

export default Navbar;
