import { ReactElement } from 'react';
import { TextField } from '@/components/TextField';
import { router, usePage } from '@inertiajs/react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormData = {
    email: string;
    password: string;
};

export function Page(): ReactElement {
    const { errors: serverErrors } = usePage().props;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const onSubmit: SubmitHandler<FormData> = (data) =>
        router.post('/login', data);

    return (
        <main>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4 card bg-base-100 p-4 bordered w-80">
                    <TextField
                        label="Email"
                        {...register('email')}
                        error={errors.email?.message ?? serverErrors.email}
                    />
                    <TextField
                        label="Password"
                        {...register('password')}
                        error={
                            errors.password?.message ?? serverErrors.password
                        }
                    />
                    <button
                        className="btn btn-secondary w-full max-w-xs"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </main>
    );
}
