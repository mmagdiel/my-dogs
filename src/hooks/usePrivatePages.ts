import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useCookie } from "react-use";

import { COOKIE, Paths } from "../models";

type UsePrivatePage = () => (
  newValue: string,
  options?: Cookies.CookieAttributes | undefined,
) => void;

const [_, home] = Paths;

export const usePrivatePage: UsePrivatePage = () => {
  const [token, updateCookie] = useCookie(COOKIE);
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate(home);
    }
  }, [token]);
  return updateCookie;
};
