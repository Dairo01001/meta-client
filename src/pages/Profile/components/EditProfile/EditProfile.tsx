import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Profile } from "../../models";
import { ProfileSchema } from "./schema";
import { cn } from "@/lib/utils";
import { CalendarIcon, Edit } from "lucide-react";
import { Calendar, Input } from "@/components";
import { useState } from "react";

type EditProfileProps = {
  profile: Profile | null;
};

export const EditProfile = ({ profile }: EditProfileProps) => {
  const form = useForm<z.infer<typeof ProfileSchema>>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      birthDate: new Date(new Date(profile?.birthDate || "")),
      phone: profile?.phone || "",
      photo: profile?.photo || "",
    },
  });
  const [edit, setEdit] = useState(true);

  const onSubmit = async (values: z.infer<typeof ProfileSchema>) => {
    try {
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="col-span-12 p-4 shadow-lg">
      <p className="text-2xl font-bold text-center m-5 w-full">
        Datos Personales
        <Edit onClick={() => setEdit(!edit)} className="hover:cursor-pointer" />
      </p>
      <div className="flex gap-5">
        <div className="w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 w-full p-10 rounded-lg"
            >
              <FormField
                control={form.control}
                name="birthDate"
                disabled={edit}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                disabled={edit}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numero de Telefono</FormLabel>
                    <FormControl>
                      <Input placeholder="3003123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="photo"
                disabled={edit}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Foto de perfil</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://image.com/image.png"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {!edit ? (
                <div className="w-full flex justify-center">
                  <Button size="sm" className="bg-green-600" type="submit">
                    Enviar
                  </Button>
                </div>
              ) : null}
            </form>
          </Form>
        </div>
        <img src={profile?.photo} alt="Foto de perfil" className="h-96" />
      </div>
    </div>
  );
};

export default EditProfile;
