import { ReactElement } from 'react';
import { Link, usePage } from '@inertiajs/react';

export function Navigation(): ReactElement {
    const { auth } = usePage<{ auth: { user: string } }>().props;

    const loggedIn = auth?.user != null;

    return (
        <nav className="flex full-width p-4 items-center">
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
        </nav>
    );
}
