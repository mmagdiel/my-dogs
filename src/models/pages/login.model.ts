const FormDataKeys = ["email", "password"] as const;
type FormDataKey = (typeof FormDataKeys)[number];

type FormData = {
  [key in FormDataKey]: string;
};

export { FormDataKeys };
export type { FormData, FormDataKey };
