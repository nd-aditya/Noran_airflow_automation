// validations.ts
export const validateName = (value: unknown): boolean | string => {
  if (typeof value !== "string") {
    return "Invalid value type";
  }

  if (value || value === "") {
    return true;
  }
  if (/^\d+$/.test(value.trim())) {
    return "Name cannot be only digits";
  }
  if (!/^[a-zA-Z0-9 .-]+$/.test(value.trim())) {
    return "Invalid characters in name";
  }
  return true;
};

export const validatePhoneNumber = (value: unknown): boolean | string => {
  if (typeof value !== "string") {
    return "Invalid value type";
  }
  const pattern = /^(\+1[-.\s]?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
  if (!pattern.test(value.trim())) {
    return "Must be a valid US phone number";
  }
  return true;
};

export const validateEmail = (value: unknown): boolean | string => {
  if (typeof value !== "string") {
    return "Invalid value type";
  }
  const pattern = /^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!pattern.test(value.trim())) {
    return "Must be a valid email";
  }
  return true;
};

export const validateZipcode = (value: unknown): boolean | string => {
  if (typeof value !== "string") {
    return "Invalid value type";
  }
  if (!/^\d{5}$/.test(value.trim())) {
    return "Zipcode must be 5 digits";
  }
  return true;
};
