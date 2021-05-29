import Link from 'next/link';

export default function Landing() {
    return (
        <main className="h-full min-h-screen">
            {/* Header */}
            <header className="flex justify-between p-4">
                {/* Name */}
                <Link href="/"><div className="cursor-pointer block font-bold text-white tracking-widest text-base">ISRAEL AYOKUNNU</div></Link>

                <div className="flex flex-row items-center justify-end">
                    {/* Social Icons */}
                    <div className="flex flex-row items-center">
                        <a href="https://github.com/easyadin" target="_blank">
                            <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <path id="Icon_awesome-github-square" data-name="Icon awesome-github-square" d="M12.5,2.25H1.5A1.5,1.5,0,0,0,0,3.75v11a1.5,1.5,0,0,0,1.5,1.5h11a1.5,1.5,0,0,0,1.5-1.5v-11A1.5,1.5,0,0,0,12.5,2.25ZM8.666,14.241c-.263.047-.359-.116-.359-.25,0-.169.006-1.031.006-1.728a1.218,1.218,0,0,0-.353-.959c1.156-.128,2.375-.287,2.375-2.284A1.6,1.6,0,0,0,9.8,7.8a1.954,1.954,0,0,0-.053-1.406c-.434-.134-1.428.559-1.428.559a4.916,4.916,0,0,0-2.6,0s-.994-.694-1.428-.559A1.939,1.939,0,0,0,4.238,7.8,1.569,1.569,0,0,0,3.75,9.019c0,1.987,1.166,2.156,2.322,2.284a1.133,1.133,0,0,0-.331.7,1.1,1.1,0,0,1-1.509-.434,1.089,1.089,0,0,0-.8-.534c-.506-.006-.034.319-.034.319.337.156.575.756.575.756.3.928,1.753.616,1.753.616,0,.434.006,1.141.006,1.269s-.094.3-.359.25A5.185,5.185,0,0,1,1.869,9.294,4.959,4.959,0,0,1,6.931,4.247a5.07,5.07,0,0,1,5.194,5.047A5.137,5.137,0,0,1,8.666,14.241ZM5.6,12.331c-.059.013-.116-.013-.122-.053s.034-.088.094-.1.116.019.122.059S5.662,12.319,5.6,12.331ZM5.3,12.3c0,.041-.047.075-.109.075s-.116-.028-.116-.075.047-.075.109-.075S5.3,12.256,5.3,12.3Zm-.428-.034c-.013.041-.075.059-.128.041s-.1-.059-.087-.1.075-.059.128-.047S4.891,12.228,4.875,12.269ZM4.491,12.1c-.028.034-.087.028-.134-.019s-.059-.1-.028-.128.087-.028.134.019S4.519,12.075,4.491,12.1Zm-.284-.284c-.028.019-.081,0-.116-.047s-.034-.1,0-.122.087-.006.116.041a.092.092,0,0,1,0,.128Zm-.2-.3c-.028.028-.075.012-.109-.019s-.041-.088-.013-.109.075-.013.109.019S4.031,11.491,4,11.513Zm-.209-.231a.059.059,0,0,1-.087.012c-.041-.019-.059-.053-.047-.081a.074.074,0,0,1,.088-.013C3.787,11.222,3.806,11.256,3.794,11.281Z" transform="translate(0 -2.25)" fill="#fff" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/easyadin/" target="_blank">
                            <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin" d="M13,2.25H1A1,1,0,0,0,0,3.259V15.241A1,1,0,0,0,1,16.25H13a1.007,1.007,0,0,0,1-1.009V3.259A1.007,1.007,0,0,0,13,2.25Zm-8.769,12H2.156V7.569H4.234V14.25ZM3.194,6.656a1.2,1.2,0,1,1,1.2-1.2,1.2,1.2,0,0,1-1.2,1.2Zm8.816,7.594H9.934V11c0-.775-.016-1.772-1.078-1.772-1.081,0-1.247.844-1.247,1.716V14.25H5.534V7.569H7.525v.912h.028A2.186,2.186,0,0,1,9.519,7.4c2.1,0,2.491,1.384,2.491,3.184Z" transform="translate(0 -2.25)" fill="#fff" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/easyadin" target="_blank">
                            <svg className="mx-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                                <path id="Icon_awesome-twitter-square" data-name="Icon awesome-twitter-square" d="M12.5,2.25H1.5A1.5,1.5,0,0,0,0,3.75v11a1.5,1.5,0,0,0,1.5,1.5h11a1.5,1.5,0,0,0,1.5-1.5v-11A1.5,1.5,0,0,0,12.5,2.25ZM10.972,7.213c.006.087.006.178.006.266a5.792,5.792,0,0,1-5.831,5.831A5.8,5.8,0,0,1,2,12.391a4.318,4.318,0,0,0,.494.025,4.109,4.109,0,0,0,2.544-.875,2.052,2.052,0,0,1-1.916-1.422,2.209,2.209,0,0,0,.925-.038A2.05,2.05,0,0,1,2.406,8.069V8.044a2.048,2.048,0,0,0,.925.259A2.045,2.045,0,0,1,2.419,6.6,2.024,2.024,0,0,1,2.7,5.562,5.819,5.819,0,0,0,6.922,7.706a2.054,2.054,0,0,1,3.5-1.872,4.016,4.016,0,0,0,1.3-.494,2.044,2.044,0,0,1-.9,1.128A4.079,4.079,0,0,0,12,6.15,4.314,4.314,0,0,1,10.972,7.213Z" transform="translate(0 -2.25)" fill="#fff" />
                            </svg>
                        </a>
                    </div>
                </div>
            </header>

            {/* Body */}
            <div className="2xl:px-64 xl:px-40 mt-24">
                <div className="grid lg:grid-cols-3">
                    {/* Large Name */}
                    <div className="p-4" style={{ width: 'fit-content' }}>
                        <div className="text-5xl lg:text-7xl text-white font-bold flex flex-col items-start">
                            <span>Israel</span>
                            <span>Ayokunnu</span>
                        </div>
                        <div className="mt-8 rounded-3xl bg-cyan text-white px-4 py-2 text-sm" style={{ width: 'fit-content' }}>Software Engineer</div>
                        {/* Cut Line */}
                        <div className="max-w-sm transform lg:-rotate-45 lg:translate-x-52 hidden lg:block" style={{ height: '.1px', background: 'rgba(255, 255, 255, 0.41)' }}></div>
                    </div>

                    {/* Typographic Content */}
                    <div className="sm:col-span-2 p-4 text-white">
                        <div className="lg:mt-48 lg:ml-24">
                            <div>
                                <div className="text-xs font-thin hidden lg:contents">That's my name on the left.</div>
                                <div className="text-xs font-thin lg:hidden">That's my name at the top.</div>
                            </div>

                            <div className="text-lg mt-4">Hey, I build things for the web.</div>
                            <div className="text-xl font-semibold mt-4">I do a lot of coding but I mostly start by prototyping (UI/UX thingies) the task in AdobeXD.</div>
                            <div className="text-3xl font-bold mt-4">I work mostly with React, Nextjs, Ionic,  Angular, Capacitor, Node, Graphql, Tailwind.</div>

                            {/* CTA */}
                            <div className="mt-4">
                                <a href="https://playground.protegie.com" className="block text-4xl font-bold uppercase text-cyan">View my Playground</a>
                                <div className="text-base font-thin">Contains a bunch boilerplates and interesting codes and random thoughts.</div>

                                <Link href="/works"><div className="text-4xl font-bold uppercase text-purple mt-4">My recent deployments</div></Link>
                                <div className="text-base font-thin">Mostly all the recent projects. You should probably check here if you want to work with me or work for me. <span className="opacity-5">Whatever</span></div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </main>
    )
}
