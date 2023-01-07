import Link from "next/link"
import { Cursor, Typewriter } from "react-simple-typewriter"
import { Circles } from "./Circles"

type Props = {}

export const Hero = ({ }: Props) => {
    const words = ["Hi, My name's Alexander Pérez", 'Guy-who-loves-games.tsx', '<AndLovesCoding />']

    return (
        <section id='hero' className="snap-center">
            <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
                <Circles />
                <div className="z-20">
                    <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Developer</h2>
                    <h1 className="text-xl lg:text-6xl font-semibold px-10">
                        <span className="mr-3">
                            <Typewriter words={words} loop delaySpeed={2000} />
                            <Cursor cursorColor="red" />
                        </span>
                    </h1>
                    <div className="pt-5">
                        <Link href="#about">
                            <button className="heroButton">About</button>
                        </Link>
                        <Link href="#skills">
                            <button className="heroButton">Skills</button>
                        </Link>
                        <Link href="#projects">
                            <button className="heroButton">Projects</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}