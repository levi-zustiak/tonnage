import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import '../css/app.css';
import '../css/index.css';

void createInertiaApp({
    resolve: (path) => {
        const pages = import.meta.glob('./pages/**/*page.tsx', {
            import: 'Page',
            eager: true,
        });

        const layouts = Object.entries(import.meta.glob('./pages/'))
            .filter(([file]) => {
                const pattern = /\.\/pages|\/layout\.tsx/g;

                return path.includes(file.replace(pattern, ''));
            })
            .sort(([keyA], [keyB]) => keyA.length - keyB.length)
            .map(([file, layout]) => layout);

        const page = pages[`./pages/${path}/page.tsx`];

        // page.layout = layouts;

        return page;
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />);
    },
});
