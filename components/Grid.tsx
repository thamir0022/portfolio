import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about" className="">
      <BentoGrid>
        {gridItems.map(({className, description, id, img, imgClassName, spareImg, title, titleClassName}) => (
          <BentoGridItem className={className} id={id} key={id} title={title} description={description} img={img} spareImg={spareImg} imgClassName={imgClassName}/>
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
