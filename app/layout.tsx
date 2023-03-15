import './globals.css';
import type { Metadata } from 'next';
import { IInitialState } from '@/store';
import { StoreProvider } from '@/components/StoreProvider';

export const metadata: Metadata = {
  title: 'Next.js 13 + TypeScript + MobX & Hydration + Tailwind CSS',
  description:
    'Server-side rendering with Next.js 13 + TypeScript + Tailwind CSS + MobX',
};

type Props = {
  children: React.ReactNode;
};

const initialData: IInitialState = {
  firstStore: {},
  secondStore: {
    count: 123,
  },
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <StoreProvider initialState={initialData}>
          <div className="flex w-full overflow-hidden">
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
