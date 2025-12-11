"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2).max(10),
  firstName: z.string().min(2).max(10),
  lastName: z.string().min(2).max(10),
  email: z.string().min(2).max(10),
  phoneNumber: z.string().min(2).max(10),
  password: z.string().min(2).max(10),
  confirmPassword: z.string().min(2).max(10),
});

const FormPage = () => {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 👉 Step1 submit → Step2 руу
  const onStep1Submit = (values: z.infer<typeof formSchema>) => {
    console.log("STEP 1 DATA:", values);
    setStep(2);
  };

  // 👉 Step2 submit → Final submit
  const onStep2Submit = (values: z.infer<typeof formSchema>) => {
    console.log("FINAL SUBMIT:", values);
    alert("Form submitted!");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-100 h-120 gap-8">
        <CardHeader>
          <h1 className="text-2xl font-bold">User form</h1>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form
              onSubmit={
                step === 1
                  ? form.handleSubmit(onStep1Submit)
                  : form.handleSubmit(onStep2Submit)
              }
              className="space-y-4"
            >
              {step === 1 && (
                <>
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="nika" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="baska" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="mule" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              {/* ------------------------ STEP 2 ------------------------ */}
              {step === 2 && (
                <>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="12345678" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                          <Input type="password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}

              <Button type="submit">{step === 1 ? "Next" : "Submit"}</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormPage;
