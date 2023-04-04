/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Order } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function OrderUpdateForm(props) {
  const {
    id: idProp,
    order: orderModelProp,
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
    seller_id: "",
    price: "",
    quantity: "",
    name: "",
    image: "",
    total: "",
    item_id: "",
  };
  const [buyer_id, setBuyer_id] = React.useState(initialValues.buyer_id);
  const [seller_id, setSeller_id] = React.useState(initialValues.seller_id);
  const [price, setPrice] = React.useState(initialValues.price);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [name, setName] = React.useState(initialValues.name);
  const [image, setImage] = React.useState(initialValues.image);
  const [total, setTotal] = React.useState(initialValues.total);
  const [item_id, setItem_id] = React.useState(initialValues.item_id);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderRecord
      ? { ...initialValues, ...orderRecord }
      : initialValues;
    setBuyer_id(cleanValues.buyer_id);
    setSeller_id(cleanValues.seller_id);
    setPrice(cleanValues.price);
    setQuantity(cleanValues.quantity);
    setName(cleanValues.name);
    setImage(cleanValues.image);
    setTotal(cleanValues.total);
    setItem_id(cleanValues.item_id);
    setErrors({});
  };
  const [orderRecord, setOrderRecord] = React.useState(orderModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Order, idProp)
        : orderModelProp;
      setOrderRecord(record);
    };
    queryData();
  }, [idProp, orderModelProp]);
  React.useEffect(resetStateValues, [orderRecord]);
  const validations = {
    buyer_id: [{ type: "Required" }],
    seller_id: [{ type: "Required" }],
    price: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
    name: [{ type: "Required" }],
    image: [],
    total: [{ type: "Required" }],
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
          seller_id,
          price,
          quantity,
          name,
          image,
          total,
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
            Order.copyOf(orderRecord, (updated) => {
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
      {...getOverrideProps(overrides, "OrderUpdateForm")}
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
              seller_id,
              price,
              quantity,
              name,
              image,
              total,
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
        label="Seller id"
        isRequired={true}
        isReadOnly={false}
        value={seller_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyer_id,
              seller_id: value,
              price,
              quantity,
              name,
              image,
              total,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.seller_id ?? value;
          }
          if (errors.seller_id?.hasError) {
            runValidationTasks("seller_id", value);
          }
          setSeller_id(value);
        }}
        onBlur={() => runValidationTasks("seller_id", seller_id)}
        errorMessage={errors.seller_id?.errorMessage}
        hasError={errors.seller_id?.hasError}
        {...getOverrideProps(overrides, "seller_id")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              buyer_id,
              seller_id,
              price: value,
              quantity,
              name,
              image,
              total,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
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
              seller_id,
              price,
              quantity: value,
              name,
              image,
              total,
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
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyer_id,
              seller_id,
              price,
              quantity,
              name: value,
              image,
              total,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              buyer_id,
              seller_id,
              price,
              quantity,
              name,
              image: value,
              total,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Total"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={total}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              buyer_id,
              seller_id,
              price,
              quantity,
              name,
              image,
              total: value,
              item_id,
            };
            const result = onChange(modelFields);
            value = result?.total ?? value;
          }
          if (errors.total?.hasError) {
            runValidationTasks("total", value);
          }
          setTotal(value);
        }}
        onBlur={() => runValidationTasks("total", total)}
        errorMessage={errors.total?.errorMessage}
        hasError={errors.total?.hasError}
        {...getOverrideProps(overrides, "total")}
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
              seller_id,
              price,
              quantity,
              name,
              image,
              total,
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
          isDisabled={!(idProp || orderModelProp)}
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
              !(idProp || orderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
