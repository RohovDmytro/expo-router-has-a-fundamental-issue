import { useEffect } from 'react';
import { Nav } from '../Nav';

export default function Index() {
  useEffect(() => {
    console.log("MOUNTED: index")
  }, []);

  return (
    <Nav />
  )
}