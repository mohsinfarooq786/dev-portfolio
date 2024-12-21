import { Card } from "react-bootstrap";

export default function SkillCard({ title, description, icon }) {
  return (
    <div>
      <Card className="px-4 py-[4rem] h-[26em] flex flex-col items-start bg-[#4A90E211] backdrop-filter backdrop-blur-[1.5px] border-[1.5px] border-[solid] border-[#FFFFFF2E] text-white rounded-[3rem]">
        <div className="cardIcon bg-[#D3E97A] text-black rounded-full p-2.5 ml-4">
          {icon}
        </div>
        <Card.Body className="mt-2">
          <Card.Title className="bebas-neue text-[2.8rem]">{title}</Card.Title>
          <Card.Text className="manrope-semibold text-[1rem] text-[#C7C7C7]">
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
