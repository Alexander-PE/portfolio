import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
};

export const Contact = () => {

    const { register, handleSubmit} = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = FormData => {
        window.location.href = `mailto:alexander.pereze02@gmail.com?subject=${FormData.subject}&body=Hi, my name is ${FormData.name}, ${FormData.message} (${FormData.email})`
    }

    return (
        <section id="contact" className="snap-start">
            <div className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

                <div className="flex flex-col space-y-10">
                    <h4 className="text-2xl font-semibold text-center">
                        I&apos;ve got just what you need.{" "}
                        <span className="underline decoration-[#f7ab0a]/50">Let&apos;s Talk.</span>
                    </h4>

                    <div className="space-y-10">
                        <div className="flex items-center space-x-5 justify-center">
                            <PhoneIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                            <p className="text-xl">+18297603665</p>
                        </div>

                        <div className="flex items-center space-x-5 justify-center">
                            <EnvelopeIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                            <p className="text-xl">alexander.pereze02@gmail.com</p>
                        </div>

                        <div className="flex items-center space-x-5 justify-center">
                            <MapPinIcon className="text-[#f7ab0a] h-6 w-6 animate-pulse" />
                            <p className="text-xl">Dominican Republic, Santo Domingo</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
                            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
                        </div>

                        <input {...register("subject")} placeholder="Subject" className="contactInput" type="text"/>

                        <textarea {...register("message")} placeholder="Message" className="contactInput" />

                        <button type="submit" className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}
