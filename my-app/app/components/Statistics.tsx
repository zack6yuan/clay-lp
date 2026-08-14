import Statistic from "./Statistic";

export default function Statistics() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-20 gap-10">
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