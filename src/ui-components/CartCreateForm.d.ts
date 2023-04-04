/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartCreateFormInputValues = {
    buyer_id?: string;
    quantity?: number;
    item_id?: string;
};
export declare type CartCreateFormValidationValues = {
    buyer_id?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    item_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartCreateFormOverridesProps = {
    CartCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    buyer_id?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    item_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartCreateFormProps = React.PropsWithChildren<{
    overrides?: CartCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onSuccess?: (fields: CartCreateFormInputValues) => void;
    onError?: (fields: CartCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartCreateFormInputValues) => CartCreateFormInputValues;
    onValidate?: CartCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartCreateForm(props: CartCreateFormProps): React.ReactElement;
