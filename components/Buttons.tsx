import Link from 'next/link'

type Props = {}

export const Buttons = (props: Props) => {
    return (
        <div className="pt-5 space-x-5">
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
    )
}