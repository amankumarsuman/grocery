// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Item, User, Cart, Order } = initSchema(schema);

export {
  Item,
  User,
  Cart,
  Order
};