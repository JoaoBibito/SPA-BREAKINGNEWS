import {z} from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({message: "A Pesquisa não pode ser vazia"})
    .refine((value) => !/^\s*$/.test(value), {
      message: "A Pesquisa não pode ser apenas espaço",
    }),
});
