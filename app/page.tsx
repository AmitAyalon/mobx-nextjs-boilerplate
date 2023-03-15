import CounterFirst from '@/components/CounterFirst';
import CounterSecond from '@/components/CounterSecond';

const Page = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center gap-x-8">
      <div className="absolute top-0 mt-32">
        <h1 className="text-white">
          Server-side Rendering with Next.js 13 & MobX
        </h1>
      </div>
      <CounterFirst />
      <CounterSecond />
    </div>
  );
};

export default Page;
