import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner"; // Assuming sonner is used for toasts, based on package.json

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    prn: z.string().min(1, "PRN is required"),
    email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

interface RegistrationModalProps {
    trigger: React.ReactNode;
}

export function RegistrationModal({ trigger }: RegistrationModalProps) {
    const [open, setOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log("Form Data:", data);
        toast.success("Registration Successful!", {
            description: "We've received your details. See you at EPSILON 2026!",
        });

        setIsSubmitting(false);
        setOpen(false);
        reset();
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-black/90 border-white/10 text-white backdrop-blur-xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                        Join EPSILON 2026
                    </DialogTitle>
                    <DialogDescription className="text-center text-gray-400">
                        Enter your details to register for the event.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="John Doe"
                            {...register("name")}
                            className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-600"
                        />
                        {errors.name && (
                            <p className="text-xs text-red-400">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="prn" className="text-gray-300">PRN / ID</Label>
                        <Input
                            id="prn"
                            placeholder="Enter your PRN"
                            {...register("prn")}
                            className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-600"
                        />
                        {errors.prn && (
                            <p className="text-xs text-red-400">{errors.prn.message}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            {...register("email")}
                            className="bg-white/5 border-white/10 focus:border-primary text-white placeholder:text-gray-600"
                        />
                        {errors.email && (
                            <p className="text-xs text-red-400">{errors.email.message}</p>
                        )}
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Registering...
                            </>
                        ) : (
                            "Confirm Registration"
                        )}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
