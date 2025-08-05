import { useActionState } from "react";
import { z, ZodError } from "zod";
import { AxiosError } from "axios";

import { api } from "../services/api";

import { Input } from "../components/Input";
import { Button } from "../components/Button";

const signInSchema = z.object({
  email: z.email({ message: "E-mail inválido" }),
  password: z.string().trim().min(1, { message: "Informe sua senha" }),
});

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(signIn, null);

  async function signIn(_: any, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get("email"),
        password: formData.get("password"),
      });
      const response = await api.post("/sessions", data)
      console.log(response.data)
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        return {message: error.issues[0].message};
      }
      if(error instanceof AxiosError){
        return {message: error.response?.data.message}
      }
      return {message: "Erro ao fazer login, tente novamente mais tarde."};
    }
  }
  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />
      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />
      <p className="text-red-600 text-sm text-center font-medium py-4">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
      <a
        href="/signup"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-shadow-green-800 transition ease-linear"
      >
        Criar conta
      </a>
    </form>
  );
}
