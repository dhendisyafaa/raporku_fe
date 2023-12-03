import LoadingOval from "@/components/common/LoadingOval";
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAllClassname } from "@/pages/api/resolver/classnameResolver";
import { useCreateStudent } from "@/pages/api/resolver/studentResolver";
import { useCreateTeacher } from "@/pages/api/resolver/teacherResolver";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const CreateTeacher = () => {
  const [loadingButton, setloadingButton] = useState(false);
  const { toast } = useToast();
  const { mutateAsync: createTeacherData } = useCreateTeacher();
  const { data: classnames, isLoading } = useAllClassname();

  const renderClassname = () => {
    if (isLoading) return <p>loading...</p>;
    return classnames?.data.map((classname) => (
      <SelectItem key={classname.id_kelas} value={`${classname.id_kelas}`}>
        {classname.nama_kelas}
      </SelectItem>
    ));
  };

  const formSchema = z.object({
    nip: z.string().min(2, {
      message: "NIP wajib untuk diisi",
    }),
    email: z.string().min(2, {
      message: "Email wajib untuk diisi",
    }),
    nama_lengkap: z.string().min(2, {
      message: "Nama wajib untuk diisi",
    }),
    tempat_lahir: z.string().min(2, {
      message: "Tempat lahir wajib untuk diisi",
    }),
    jenis_kelamin: z.enum(["L", "P"]),
    tanggal_lahir: z.string().min(2, {
      message: "Tempat lahir wajib untuk diisi",
    }),
    id_kelas: z.string().min(1, {
      message: "Pilih kelas terlebih dahulu",
    }),
    alamat: z.string().min(2, {
      message: "Alamat wajib untuk diisi",
    }),
    no_telepon: z.string().min(2, {
      message: "Nomor telepon wajib untuk diisi",
    }),
    pendidikan_tertinggi: z.string().min(2, {
      message: "Pendidikan tertinggi wajib untuk diisi",
    }),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nama_lengkap: "",
      email: "",
      nip: "",
      id_kelas: "",
      jenis_kelamin: "",
      tempat_lahir: "",
      tanggal_lahir: "",
      alamat: "",
      no_telepon: "",
      pendidikan_tertinggi: "",
    },
  });

  const onSubmit = async (values) => {
    setloadingButton(true);
    console.log("values", values);
    try {
      await createTeacherData(values);
      setloadingButton(false);
      toast({
        title: "Berhasil menyimpan perubahan",
      });
    } catch (error) {
      setloadingButton(false);
      console.log("error catch", error);
      if (error.response) {
        toast({
          variant: "destructive",
          title: `${error.response?.data?.errors[0].error}`,
        });
      }
    }
  };

  return (
    <DashboardLayout
      titleHeader={"Tambah data guru"}
      messageHeader={"Pastikan data yang didaftarkan telah sesuai"}
    >
      <div className="flex w-full justify-around flex-col">
        <Toaster />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="my-4 text-foreground font-semibold">
              Informasi pribadi
              <hr />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-3">
              <FormField
                control={form.control}
                name="nama_lengkap"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama Lengkap</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="jenis_kelamin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Jenis Kelamin</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="L/P" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tempat_lahir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tempat Lahir</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tanggal_lahir"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tanggal Lahir</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="alamat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Alamat</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="no_telepon"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telepon</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="pendidikan_tertinggi"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pendidikan Tertinggi</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="my-4 text-foreground font-semibold">
              Informasi sekolah
              <hr />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 p-3">
              <FormField
                control={form.control}
                name="nip"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>NIP</FormLabel>
                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Guru</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="id_kelas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wali Kelas</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Pilih Kelas" />
                        </SelectTrigger>
                        <SelectContent>{renderClassname()}</SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full justify-end">
              <Button
                type="submit"
                disabled={loadingButton}
                className="flex gap-3 w-full md:max-w-fit"
              >
                {loadingButton && <LoadingOval />}
                Simpan Perubahan
              </Button>
            </div>
            <p className="text-foreground text-center text-xs mt-4">
              Terdapat beberapa bagian yang tidak dapat diubah kembali
              <span className="text-red-600">*</span>
            </p>
          </form>
        </Form>
      </div>
    </DashboardLayout>
  );
};

export default CreateTeacher;
