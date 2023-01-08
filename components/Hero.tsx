import { Cursor, Typewriter } from "react-simple-typewriter"
import { Buttons } from "./Buttons"
import { Circles } from "./Circles"

type Props = {}

export const Hero = ({ }: Props) => {
    const words = ["Hi, My name's Alexander Pérez", 'Guy-who-loves-games.tsx', '<AndLovesCoding />']

    return (
        <section id='hero' className="snap-start">
            <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
                <Circles />
                <div className="z-20">
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Front-End Developer</h2>
                    <h1 className="text-xl lg:text-6xl font-semibold px-10">
                        <span className="mr-3">
                            <Typewriter words={words} loop delaySpeed={2000} />
                            <Cursor cursorColor="red" />
                        </span>
                    </h1>
                    <Buttons />
                </div>
            </div>
        </section>
    )
}