
import TestComponent from "./_components/TestComponent";
import { Analytics } from '@vercel/analytics/react';

export default async function Home() {
  

  return (
    <>
    <div>Hello world</div>
    <TestComponent />
    <Analytics />
    </>
  );
}


