import { ListObject } from "../domain/breeds.model";

export interface NavbarProps {
  list: ListObject;
  handleLogOut: () => void;
}
