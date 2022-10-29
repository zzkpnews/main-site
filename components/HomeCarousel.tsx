import { Carousel } from '@arco-design/web-react';
const imageSrc = [
  'http://cpc.people.com.cn/NMediaFile/2022/1025/MAIN202210250016363698160563703.jpg',
  'http://cpc.people.com.cn/NMediaFile/2022/1025/MAIN202210250013091570233044727.png',
  'http://cpc.people.com.cn/NMediaFile/2022/1025/MAIN202210250013080804502806359.jpg',
];

export const HomeCarousel = () => {
  return (
    <div className="bg-slate-50 flex flex-col justify-between lg:flex-row rounded-lg">
      <Carousel className="basis-2/3 h-96">
        {imageSrc.map((src, index) => (
          <img
            src={src}
            key={index}
            className="rounded-md mx-0 my-0"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt=""
          />
        ))}
      </Carousel>
      <div className="flex flex-col mx-auto my-auto text-center lg:basis-1/3 h-96">
        <h2 className="text-xl font-bold hover:text-red-700 cursor-pointer my-3">中国共产党第二十次全国代表大会</h2>
        <h3 className="text-lg font-bold text-slate-600">副标题副标题副标题副标题</h3>
      </div>
    </div>
  );
};
