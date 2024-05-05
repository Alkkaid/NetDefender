"use client"
import { addNewDevice } from "@/actions/addNewDevice"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AddDeviceSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from 'zod';

export function AddDevice() {
    const onSubmit = (values: z.infer<typeof AddDeviceSchema>) => {
        console.log(values);
        addNewDevice(values);

    }

    const form = useForm<z.infer<typeof AddDeviceSchema>>({
        resolver: zodResolver(AddDeviceSchema),
        defaultValues: {
            name: "",
            code: "",
        }
    });

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Add Device</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add your device</DialogTitle>
                    <DialogDescription>
                        Click save when you are done.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form 
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <div className="grid gap-4 py-4">
                            <FormField
                                control={form.control}
                                name="name"
                                // className="grid grid-cols-4 items-center gap-4">
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="Name"
                                                type="text"
                                                className="col-span-3"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="code"
                                // className="grid grid-cols-4 items-center gap-4"
                                render={({ field }) => (
                                    <FormItem className="grid grid-cols-4 items-center gap-4">
                                        <FormLabel>Code</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="123456"
                                                type="text"
                                                className="col-span-3"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <DialogFooter>
                            <Button type="submit">Save</Button>
                        </DialogFooter>
                    </form>

                </Form>
            </DialogContent>
        </Dialog>
    )
}

