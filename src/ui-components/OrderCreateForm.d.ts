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
export declare type OrderCreateFormInputValues = {
    buyer_id?: string;
    seller_id?: string;
    price?: number;
    quantity?: number;
    name?: string;
    image?: string;
    total?: number;
    item_id?: string;
};
export declare type OrderCreateFormValidationValues = {
    buyer_id?: ValidationFunction<string>;
    seller_id?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    quantity?: ValidationFunction<number>;
    name?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
    item_id?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderCreateFormOverridesProps = {
    OrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    buyer_id?: PrimitiveOverrideProps<TextFieldProps>;
    seller_id?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    item_id?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onSuccess?: (fields: OrderCreateFormInputValues) => void;
    onError?: (fields: OrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onValidate?: OrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderCreateForm(props: OrderCreateFormProps): React.ReactElement;
