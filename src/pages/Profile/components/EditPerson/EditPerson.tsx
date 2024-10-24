import { Input } from "@/components";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Person } from "../../models";
import { PersonSchema } from "./schema";

type EditProfileProps = {
  person: Person | null;
};

export const EditPerson = ({ person }: EditProfileProps) => {
  const form = useForm<z.infer<typeof PersonSchema>>({
    resolver: zodResolver(PersonSchema),
    defaultValues: {
      firstName: person?.firstName || "",
      secondName: person?.secondName || "",
      firstSurname: person?.firstSurname || "",
      secondSurname: person?.secondSurname || "",
      email: person?.email || "",
    },
  });

  const onSubmit = async (values: z.infer<typeof PersonSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-span-12 p-4 shadow-lg">
      <p className="text-2xl font-bold text-center m-5 w-full">
        Datos Institucionales
      </p>
      <div className="flex gap-5">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full p-10 rounded-lg"
            >
              <div className="w-full flex flex-row gap-5">
                <FormField
                  control={form.control}
                  name="firstName"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Primer Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Jhon" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondName"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Segundo Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex flex-row gap-5">
                <FormField
                  control={form.control}
                  name="firstSurname"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Primer Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="secondSurname"
                  disabled
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Segundo Apellido</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                disabled
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Institucional</FormLabel>
                    <FormControl>
                      <Input placeholder="j.doe@udla.edu.co" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPerson;
