import { Card } from "react-bootstrap"

export default function PortfolioCard() {
  return (
    <>
      <Card className="border-0 bg-gray-800 text-white rounded-[3rem]">
        <div className="absolute flex right-[5%] top-[5%] technologiesTags">
          <div className="flex flex-row gap-2">
            <span className="inline-block px-3 py-2 bg-gray-700 rounded-[0.5rem] manrope-bold tracking-wide">Web Development</span>
          </div>
        </div>
        <Card.Body className="px-5 mt-[6rem]">
          <Card.Title className="bebas-neue text-[4rem]">E-Commerce Project</Card.Title>
          <Card.Text className="manrope-semibold text-[1.5rem]">
            Agency Website Development for Dev X
          </Card.Text>
        </Card.Body>
        <Card.Img className="overflow-hidden rounded-[3rem]" variant="top" src="https://cdn.prod.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png" />
      </Card>
    </>
  )
}
