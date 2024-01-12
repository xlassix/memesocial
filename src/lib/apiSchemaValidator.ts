import * as yup from 'yup';

export default async function schemaValidator<T>(
  schema: yup.AnyObjectSchema,
  payload: any
) {
  try {
    const data = await schema.validate(payload, { abortEarly: false });
    return { errors: null, payload: data as T };
  } catch (error: any) {
    return { errors: error.errors, payload: null };
  }
}
