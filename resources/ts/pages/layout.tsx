import { Navigation } from '@/pages/home/components/Navigation';
import { ReactElement } from 'react';

export function Layout({ children }: { children: ReactElement }) {
    return (
        <div className="layout">
            <Navigation />
            <main style={{ gridArea: 'content' }}>{children}</main>
        </div>
    );
}
