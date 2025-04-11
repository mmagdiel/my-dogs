import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookie } from "react-use";

import { COOKIE, Paths } from "../models";

type UsePublicPage = () => () => void;

const [login, _] = Paths;

export const usePublicPage: UsePublicPage = () => {
  const [token, _, deleteCookie] = useCookie(COOKIE);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || token === "") {
      navigate(login);
    }
  }, [token]);
  return deleteCookie;
};
