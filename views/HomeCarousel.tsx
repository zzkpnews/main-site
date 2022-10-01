import { Carousel } from '@arco-design/web-react';
import { HomeCarouselItem } from '../models/HomeCarousel';
import { useState } from 'react';
/* eslint-disable @next/next/no-img-element */

export default function HomeCarousel(props: { data: HomeCarouselItem[] }): JSX.Element {
  const [carousel_index, set_carousel_index] = useState<number>(0);

  return (
    <div className=" lg:tw-grid tw-grid-cols-3 tw-justify-around tw-rounded-lg">
      <Carousel
        className="tw-rounded-lg lg:tw-col-span-2 tw-h-96"
        showArrow="hover"
        indicatorType="line"
        direction="horizontal"
        onChange={(index) => {
          set_carousel_index(index);
        }}
        autoPlay={{ interval: 5000, hoverToPause: true }}
      >
        {props.data.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <img
            src={item.imgsrc}
            key={`carousel-img-${index}`}
            className="tw-object-cover tw-rounded-lg tw-select-none"
            alt=""
            style={{ width: "100%" }}
          />
        ))}
      </Carousel>

      <div className="tw-h-96 lg:tw-col-span-1 tw-bg-gray-100 lg:tw-mx-2 tw-rounded-lg tw-flex tw-flex-col tw-justify-center">
        <div className="tw-overflow-y-scroll tw-my-10 tw-px-10">
          <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">
            {props.data[carousel_index].leadTitle}
          </span>
          <h2 className="tw-text-center tw-block tw-text-2xl tw-font-bold tw-my-2">
            {props.data[carousel_index].title}
          </h2>
          <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">
            {props.data[carousel_index].subtitle}
          </span>
          <span className="tw-mx-10 tw-indent-8">{props.data[carousel_index].citation}</span>
        </div>
      </div>
    </div>
  );
}
