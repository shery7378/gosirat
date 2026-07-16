import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Register | GoSirat School Transportation Platform',
    description: 'Register with GoSirat for safe school transportation. Parents, drivers, and schools can join our platform with verified drivers, live GPS tracking, and secure QR verification.',
    alternates: {
        canonical: 'https://gosirat.com/register',
    },
};

export default function RegisterLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
