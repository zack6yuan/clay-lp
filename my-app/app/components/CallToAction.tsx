export default function CallToAction() {
    return (
        <section className="flex flex-col gap-5 justify-center items-center w-full max-w-4xl mx-auto px-6 text-center bg-yellow-400 rounded-3xl py-12 md:py-15">
            <span className="text-2xl md:text-3xl font-semibold">Lorem ipsum dolor sit amet hodie.</span>
            <button className="px-6 py-3 font-semibold text-yellow-400 bg-black rounded-full transition-colors duration-300 cursor-pointer hover:bg-yellow-400 hover:text-black hover:ring-2 hover:ring-black">Get started</button>
        </section>
    )
}