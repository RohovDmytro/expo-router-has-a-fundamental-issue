import { useEffect } from 'react';
import { Nav } from '../../../Nav';

export default function ScreenFromStack2() {
  useEffect(() => {
    console.log("MOUNTED: ScreenFromSlot2")
  }, []);

  return (
    <>
      <Nav />
    </>
  )
}