/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Cart } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CartUpdateForm(props) {
  const {
    id: idProp,
    cart: cartModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    buyer_id: "",
    quantity: "",
    item_id: "",
  };
  const [buyer_id, setBuyer_id] = React.useState(initialValues.buyer_id);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [item_id, setItem_id] = React.useState(initialValues.item_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cartRecord
      ? { ...initialValues, ...cartRecord }
      : initialValues;
    setBuyer_id(cleanValues.buyer_id);
    setQuantity(cleanValues.quantity);
    setItem_id(cleanValues.item_id);
    setErrors({});
  };
  const [cartRecord, setCartRecord] = React.useState(cartModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Cart, idProp)
        : cartModelProp;
      setCartRecord(record);
    };
    queryData();
  }, [idProp, cartModelProp]);
  React.useEffect(resetStateValues, [cartRecord]);
  const validations = {
    buyer_id: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
    item_id: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          buyer_id,
          quantity,
          item_id,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Cart.copyOf(cartRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CartUpdateForm")}
      {...rest}
    >
      <TextField
        label="Buyer id"
        isRequired={true}
        isReadOnly={false}
        value={buyer_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyer_id: value,
              quantity,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.buyer_id ?? value;
          }
          if (errors.buyer_id?.hasError) {
            runValidationTasks("buyer_id", value);
          }
          setBuyer_id(value);
        }}
        onBlur={() => runValidationTasks("buyer_id", buyer_id)}
        errorMessage={errors.buyer_id?.errorMessage}
        hasError={errors.buyer_id?.hasError}
        {...getOverrideProps(overrides, "buyer_id")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              buyer_id,
              quantity: value,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Item id"
        isRequired={true}
        isReadOnly={false}
        value={item_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyer_id,
              quantity,
              item_id: value,
            };
            const result = onChange(modelFields);
            value = result?.item_id ?? value;
          }
          if (errors.item_id?.hasError) {
            runValidationTasks("item_id", value);
          }
          setItem_id(value);
        }}
        onBlur={() => runValidationTasks("item_id", item_id)}
        errorMessage={errors.item_id?.errorMessage}
        hasError={errors.item_id?.hasError}
        {...getOverrideProps(overrides, "item_id")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cartModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cartModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
