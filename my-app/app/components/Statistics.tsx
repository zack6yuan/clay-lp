import Statistic from "@/components/Statistic";

export default function Statistics() {
    return (
        <section className="grid grid-cols-1 gap-10 py-10 md:py-20 w-full max-w-5xl mx-auto px-6 sm:grid-cols-2 md:grid-cols-4">
          <Statistic
            color="red"
            number={"128k"}
            description={"Lorem ipsum dolor"}
          />
          <Statistic
            color="yellow"
            number={"4.9"}
            description={"Sit amet elit"}
          />
          <Statistic
            color="green"
            number={"97%"}
            description={"Consectetur adipiscing"}
          />
          <Statistic
            color="blue"
            number={"42"}
            description={"Tempor incididunt"}
          />
        </section>
    )
}