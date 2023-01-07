import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter"
import { Circles } from "./Circles"

type Props = {}

export const Hero = ({ }: Props) => {
    const words = ["Hi, My name's Alexander Perez", 'Guy-who-loves-games.tsx', '<AndLovesToCode />']

    return (
        <section id='hero'>
            <div>
                <Circles />
                <h1>
                    <span>
                        <Typewriter words={words} loop delaySpeed={2000} />
                        <Cursor cursorColor="red"/>
                    </span>
                </h1>
            </div>
        </section>
    )
}