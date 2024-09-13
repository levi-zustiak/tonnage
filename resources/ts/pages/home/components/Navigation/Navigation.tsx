import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';

export function Navigation(): ReactElement {
    const { auth } = usePage<{ auth: { user: string } }>().props;

    const loggedIn = auth?.user != null;

    return (
        <nav
            className="full-width border-b border-solid border-base-200"
            style={{
                gridArea: 'nav',
            }}
        >
            <div
                className="flex items-center p-4 mx-auto"
                style={{ width: '1200px' }}
            >
                <h2 className="text-2xl font-bold">Tonnage</h2>
                <div className="flex gap-2 ml-auto">
                    {loggedIn ? (
                        <Link
                            href="/logout"
                            className="btn btn-outline"
                            as="button"
                        >
                            Logout
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/register"
                                className="btn btn-outline"
                                as="button"
                            >
                                Register
                            </Link>
                            <Link
                                href="/login"
                                className="btn btn-secondary"
                                as="button"
                            >
                                Log in
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
