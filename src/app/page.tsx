
import TestComponent from "./_components/TestComponent";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
export default async function Home() {
  

  return (
    <>
    <div>Hello world</div>
    <TestComponent />
    <Analytics />
    <SpeedInsights />
    </>
  );
}


