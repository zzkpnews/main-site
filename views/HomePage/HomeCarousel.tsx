import { NewsItem } from "@/models/data";
import { Carousel } from "@arco-design/web-react";
import { useState } from "react";

export const HomeCarousel = (props: { initialData?: NewsItem[] }) => {
  const [current_index, set_current_index] = useState(0);
  if (props.initialData == null || props.initialData.length === 0) {
    return null;
  }
  return (
    <div className="bg-slate-50 flex flex-col justify-between lg:flex-row rounded-lg">
      <Carousel
        className="basis-2/3 h-96"
        indicatorType="line"
        autoPlay
        onChange={(index) => {
          set_current_index(index);
        }}
      >
        {props.initialData.map((item, index) => (
          <img
            src={item.bgimg}
            key={`carousel-${index}`}
            className="rounded-md mx-0 my-0"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt={item.citation}
          />
        ))}
      </Carousel>
      <div className="flex flex-col justify-center mx-auto my-auto p-5 lg:basis-1/3 h-72 lg:h-96 ">
        <h3 className="text-md font-bold text-slate-600">
          {props.initialData[current_index].lead_title}
        </h3>
        <h2 className="text-xl font-bold hover:text-red-700 cursor-pointer my-1">
          {props.initialData[current_index].title}
        </h2>
        <h3 className="text-lg font-bold text-slate-600">
          {props.initialData[current_index].subtitle}
        </h3>
        <p className="text-md text-slate-600 my-3">
          {props.initialData[current_index].citation}
        </p>
      </div>
    </div>
  );
};
