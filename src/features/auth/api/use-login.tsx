import { useMutation } from "@tanstack/react-query";
import type { InferRequestType, InferResponseType } from "hono";
import { client } from "@/lib/rpc";

type RequestType = InferRequestType<(typeof client.api.auth.login)["$post"]>;
type ResponseType = InferResponseType<(typeof client.api.auth.login)["$post"]>;

export const useLogin = () => {
  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.login["$post"]({ json });
      return await response.json();
    },
  });
  return mutation;
};
