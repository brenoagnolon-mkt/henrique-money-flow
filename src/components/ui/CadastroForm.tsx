import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Importações dos componentes de Formulário disponibilizados por você
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@/components/ui/form"; // Ajuste o caminho se necessário
import { Input } from "@/components/ui/input"; // Componente Input do seu UI
import { Button } from "@/components/ui/button"; // Componente Button do seu UI

// 1. Definição do esquema de validação do formulário com Zod
const formSchema = z.object({
  nome: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um e-mail válido." }),
  whatsapp: z.string().min(8, { message: "Insira um telefone válido." }),
});

type FormValues = z.infer<typeof formSchema>;

// URL obtida no Passo 1 (Google Apps Script)
const WEB_APP_URL = "https://script.google.com/macros/s/AKfycby7gzy6K6G-i-vJImWLj0iXfzVy0l22XtDcq_ZmRzLrCy4h_CXAQ-0xgmbLEorK-hRt/exec";

export default function CadastroForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // 2. Inicialização do React Hook Form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      whatsapp: "",
    },
  });

  // 3. Função de envio dos dados
  async function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    try {
      // O Google Apps Script redireciona requisições CORS;
      // 'mode: "no-cors"' garante que o disparo funcione sem erros de política CORS.
      await fetch(WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      alert("Cadastro realizado com sucesso!");
      form.reset(); // Limpa o formulário após o envio
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
      alert("Houve um erro ao realizar o cadastro.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="w-full">
      {/* Provedor do Form do react-hook-form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Campo: Nome */}
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Completo</FormLabel>
                <FormControl>
                  <Input placeholder="Digite seu nome" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo: Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seuemail@exemplo.com" {...field} />
                </FormControl>
                <FormDescription>
                  Enviaremos confirmações para este endereço.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Campo: Telefone */}
          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel>WhatsApp</FormLabel>
                <FormControl>
                  <Input placeholder="(00) 00000-0000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Botão de Envio */}
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Cadastrar"}
          </Button>

        </form>
      </Form>
    </div>
  );
}
