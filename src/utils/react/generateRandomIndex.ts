// nanoid
import { assoc } from "../js/assoc";

export const generateRandomString = () => Math.random().toString(36).substring(2, 15);
// функция вызывается 1 раз
export const assignId = assoc('id', generateRandomString());
// функция вызывается при каждом новом вызове
export const generateId = <O extends object>(obj: O) => assoc('id', generateRandomString())(obj);