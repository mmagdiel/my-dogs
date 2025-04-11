import { ReactNode } from "react";

const Paths = ["/login", "/home"] as const;
type Path = (typeof Paths)[number];

interface Router {
  path: Path;
  element: ReactNode;
}

type RouterProps = Router[];

export { Paths };
export type { RouterProps };
