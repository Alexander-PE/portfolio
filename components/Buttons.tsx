import Link from 'next/link'

export const Buttons = () => {
    return (
        <div className="pt-5 space-x-5">
            <Link href="#about">
                <button className="heroButton">About</button>
            </Link>
            <Link href="#skills">
                <button className="heroButton">Skills</button>
            </Link>
            <Link href="#contact">
                <button className="heroButton">Contact</button>
            </Link>
        </div>
    )
}