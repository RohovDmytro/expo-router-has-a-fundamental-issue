import { useEffect } from 'react';
import { Nav } from '../../../Nav';

export default function ScreenFromStack1() {
  useEffect(() => {
    console.log("MOUNTED: ScreenFromSlot1")
  }, []);

  return (
    <>      
      <Nav />
    </>
  )
}