import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Clients = () => {
  return (
    <div className="pb-20" id="testimonials">
      <h1 className="heading">
        Kind words from{" "}
        <span className="text-purple">satisfied clients</span>
      </h1>
      <div className="mt-14 flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards 
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <div className="my-4 md:my-8 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({id, img, name, nameImg}) => (
            <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
              <img className="md:w-10 w-5" src={img} alt={name} />
              <img className="md:w-24 w-20" src={nameImg} alt={name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
