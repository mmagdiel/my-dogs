import type { FC } from "react";

import type { FieldsetProps } from "../models";

export const Fieldset: FC<FieldsetProps> = ({
  keyInput,
  register,
  errors,
  label,
}) => (
  <fieldset className="fieldset px-3 py-0">
    <legend className="fieldset-legend">{label}</legend>
    <input {...register(keyInput)} className="input" />
    <p className="fieldset-label h-4.5 text-error">
      {errors[keyInput]?.message}
    </p>
  </fieldset>
);
