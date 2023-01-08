type Props = {}

export const About = (props: Props) => {
    return (
        <section id="about" className="snap-center">
            <div className="aboutTitle">
                <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500">About</h3>
                <div className='space-y-10 px-0 md:px-10 '>
                    <h4 className='text-4xl font-semibold'>
                        A <span className="underline decoration-[red]/70">little</span> background about me
                    </h4>
                    <p>I am a Front-end Developer 👨🏾‍💻 with over a year programming in Javascript and knowledge in Typescript and React. 
                        I am a self-taught person with a lean mindset who wants to grow professionally and never stops to learn. </p>
                </div>
            </div>
        </section>
    )
}