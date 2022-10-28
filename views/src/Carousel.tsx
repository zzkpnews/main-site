import { Carousel as ArcoCarousel } from '@arco-design/web-react';
import React, { useState } from 'react';
import { APIResponse } from '../../api';
import { CarouselItem } from '../../models/data';
import { print_api_error } from '../../utils/error';

const Carousel = React.memo(
  (props: { carousel_response: APIResponse<CarouselItem[]> }) => {
    if (props.carousel_response.code !== 0) {
      print_api_error('carousel-api', props.carousel_response);
      return null;
    }

    const [carousel_index, set_carousel_index] = useState<number>(0);
    return (
      <div className="lg:tw-grid tw-grid-cols-3 tw-justify-around tw-rounded-lg">
        <ArcoCarousel
          className="tw-rounded-lg lg:tw-col-span-2 tw-h-96"
          showArrow="hover"
          indicatorType="line"
          direction="horizontal"
          onChange={(index) => {
            set_carousel_index(index);
          }}
          autoPlay={{ interval: 5000, hoverToPause: true }}
        >
          {props.carousel_response.data?.map((item, index) => (
            <img
              src={item.img_url}
              key={`carousel-img-${index}`}
              className="tw-object-cover tw-rounded-lg tw-select-none"
              alt={item.title}
              style={{ width: '100%' }}
            />
          ))}
        </ArcoCarousel>

        <div className="tw-h-96 lg:tw-col-span-1 tw-bg-gray-100 lg:tw-mx-2 tw-rounded-lg tw-flex tw-flex-col tw-justify-center">
          <div className="tw-overflow-y-scroll tw-my-10 tw-px-10">
            <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">
              {props.carousel_response.data && props.carousel_response.data[carousel_index].lead_title}
            </span>
            <h2 className="tw-text-center tw-block tw-text-2xl tw-font-bold tw-my-2">
              {props.carousel_response.data && props.carousel_response.data[carousel_index].title}
            </h2>
            <span className="tw-text-center tw-block tw-text-lg tw-font-bold tw-text-gray-600">
              {props.carousel_response.data && props.carousel_response.data[carousel_index].subtitle}
            </span>
            <span className="tw-mx-10 tw-indent-8">
              {props.carousel_response.data && props.carousel_response.data[carousel_index].citation}
            </span>
          </div>
        </div>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.carousel_response === nextProps.carousel_response;
  }
);

export { Carousel };
