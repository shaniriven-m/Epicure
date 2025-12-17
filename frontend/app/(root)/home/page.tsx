import Hero from "@/components/hero"

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero title={"Epicure works with the top \n chef restaurants in Tel Aviv"} imageSrc={"/images/hero-food.png"} />
    </div >
  )
}

export default HomePage