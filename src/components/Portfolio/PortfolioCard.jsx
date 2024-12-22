import { Card } from "react-bootstrap"
import { motion } from "motion/react"

export default function PortfolioCard({ tags, projectTitle, projectDesc }) {


  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.div
        className="my-4"
        initial="hidden"
        whileInView="visible"
        whileHover="hover"
        viewport={{ once: false }}
        variants={cardVariants}
      >
        <Card className="border-0 bg-gray-800 text-white rounded-[3rem]">
          <div className="absolute right-[5%] top-[5%] technologiesTags">
            <div className="flex flex-row gap-2">
              {Array.isArray(tags) && tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block px-3 py-2 bg-gray-700 rounded-[0.5rem] manrope-bold tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Card.Body className="px-5 mt-[6rem]">
            <Card.Title className="bebas-neue text-[4rem]">{projectTitle}</Card.Title>
            <Card.Text className="manrope-semibold text-[1.2rem]">
              {projectDesc}
            </Card.Text>
          </Card.Body>
          <Card.Img className="overflow-hidden rounded-[3rem] hover:scale-x-100" variant="top" src="https://cdn.prod.website-files.com/622fbc5a718ac357e4cd3da3/623226da502a8939ea536581_dark-thumbnail-image-developer-webflow-ecommerce-template.png" />
        </Card>
      </motion.div>
    </>
  )
}
