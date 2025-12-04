import Image from 'next/image';

export default function CTA() {
    return (
        <section className="relative w-full h-[600px] flex flex-col md:flex-row overflow-hidden">
            {/* Left Side (Black) */}
            <div className="w-full md:w-[60%] bg-black h-full relative z-10 flex items-center justify-center md:justify-end px-6 md:pr-24">
                <div className="max-w-md text-right md:text-right text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-none">
                        Ready To <br /> <span className="text-vivid-red">Fight?</span>
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Your journey begins with a single step. Claim your free trial class today.
                    </p>
                    <button className="bg-white text-black px-10 py-4 font-black uppercase text-lg tracking-wider hover:bg-vivid-red hover:text-white transition-colors skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Get Started</span>
                    </button>
                </div>
            </div>

            {/* Right Side (Red + Image) */}
            <div className="w-full md:w-[50%] bg-vivid-red h-full relative z-0 md:-ml-[10%] skew-x-[-12deg] overflow-hidden transform origin-bottom-left">
                {/* Un-skew the image container */}
                <div className="absolute inset-0 skew-x-[12deg] w-[150%] -ml-[25%] h-full">
                    <Image
                        src="/images/cta_athlete_action_1764807066437.png"
                        alt="Action"
                        fill
                        className="object-cover object-center opacity-90 mix-blend-multiply"
                    />
                </div>
            </div>

            {/* Mobile fix for layout */}
            <div className="absolute inset-0 md:hidden z-0">
                <Image
                    src="/images/cta_athlete_action_1764807066437.png"
                    alt="Action"
                    fill
                    className="object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>
        </section>
    );
}
