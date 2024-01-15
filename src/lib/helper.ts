export const buildSignMessage = (address: string, time: number | string) => {
  return `Sign this message to Prove you own ${address} at ${time} on platform MemeSocial`;
};

export function removeEmptyStringProperties(obj: { [key: string]: any }) {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object' && obj[prop] !== null) {
      removeEmptyStringProperties(obj[prop]);
      if (Object.keys(obj[prop]).length === 0) {
        delete obj[prop];
      }
    } else if (
      obj[prop] === '' ||
      obj[prop] === null ||
      obj[prop] === undefined
    ) {
      delete obj[prop];
    }
  }
  return obj;
}
