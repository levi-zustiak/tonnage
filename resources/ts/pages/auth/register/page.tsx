import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TextField } from '@/components/TextField';
import { router, usePage } from '@inertiajs/react';

type FormData = {
    name: string;
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
        router.post('/register', data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-4 card bg-base-100 p-4 bordered w-80"
        >
            <h1 className="text-2xl font-black">Register</h1>
            <TextField
                label="Name"
                {...register('name')}
                error={errors.name?.message ?? serverErrors.name}
            />
            <TextField
                label="Email"
                {...register('email')}
                error={errors.email?.message ?? serverErrors.email}
            />
            <TextField
                label="Password"
                {...register('password')}
                error={errors.password?.message ?? serverErrors.password}
            />
            <button className="btn btn-secondary w-full max-w-xs" type="submit">
                Register
            </button>
        </form>
    );
}
