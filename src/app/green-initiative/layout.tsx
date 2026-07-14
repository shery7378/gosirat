import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Green Initiative | GoSirat',
    description: 'GoSirat green initiative for eco-friendly school transportation.',
    alternates: {
        canonical: 'https://gosirat.com/green-initiative',
    },
};

export default function GreenInitiativeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
