import AboutHeader from "@/components/AboutHeader";

export default function About() {
  return (
    <div className="flex flex-col space-y-30">
      <div className="">
        <AboutHeader
          eyebrow={"LOREM"}
          title={"Ipsum dolor sit amet elit"}
          description={
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae."
          }
          link={"Lorem ipsum"}
          accent={"text-red-500"}
        />
        <div className="flex justify-center py-20">
          <div className="w-40 h-40 bg-red-500 rounded-3xl"></div>
        </div>
        <div className="">
          <AboutHeader
            eyebrow={"IPSUM"}
            title={"Tempor incididunt ut labore"}
            description={
              "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione."
            }
            link={"Dolor sit amet"}
            accent={"text-green-500"}
          />
          <div className="flex justify-center py-20">
          <div className="w-50 h-30 bg-green-500 rounded-full"></div>
        </div>
        </div>
        <div className="">
          <AboutHeader
            eyebrow={"DOLOR"}
            title={"Magna aliqua veniam quis"}
            description={
              "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora."
            }
            link={"Consectetur"}
            accent={"text-blue-500"}
          />
          <div className="flex justify-center py-20">
          <div className="flex justify-center items-center w-40 h-40 bg-blue-500 rounded-full">
            <div className="w-15 h-15 bg-white rounded-full"></div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
