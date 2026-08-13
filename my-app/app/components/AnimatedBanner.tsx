export default function AnimatedBanner() {
  const bannerText = [
    "Dolor",
    "AMET&CO",
    "consec",
    "Tempor*",
    "eiusmod",
    "ipsum"
  ]
    return (
      <div className="space-y-5">
        <div className="flex justify-center uppercase text-gray-500/60 font-semibold mt-10">
            <p>Trusted by Lorem Ipsum</p>
            
        </div>
        <div>
          <ul className="flex justify-between">
            {bannerText.map((item, w) => {
              return (
                <li key={w} className="text-gray-300 font-semibold">
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
}