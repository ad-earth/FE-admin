import React from "react";
import { useMutation } from "react-query";
import { test } from "../../../shared/apis/api";

const Test = async (p_Content: string) => {
  const res = await test(p_Content);
  return res.data;
};

export const useTest = (p_Content: string) => {
  return useMutation(() => Test(p_Content), {});
};
