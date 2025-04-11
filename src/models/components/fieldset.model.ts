import type { UseFormRegister, FieldErrors } from "react-hook-form";

import type { FormData, FormDataKey } from "../pages/login.model";

export interface FieldsetProps {
  label: string;
  keyInput: FormDataKey;
  errors: FieldErrors<FormData>;
  register: UseFormRegister<FormData>;
}
