import { forwardRef, HTMLProps, ReactElement, Ref } from 'react';
import { FieldError } from 'react-hook-form';

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
    label: string;
    error?: FieldError['message'];
}

export const TextField = forwardRef(function TextField(
    props: TextFieldProps,
    ref: Ref<HTMLInputElement>,
): ReactElement {
    const { label, error, ...inputProps } = props;

    return (
        <div className="flex flex-col gap-2">
            <label>{label}</label>
            <input
                {...inputProps}
                ref={ref}
                className="input input-bordered w-full max-w-xs"
                type="text"
            />
            {error && <p className="text-error">{error}</p>}
        </div>
    );
});
