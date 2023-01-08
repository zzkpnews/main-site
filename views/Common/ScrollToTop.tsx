import { FaChevronUp } from 'react-icons/fa';
export const ScrollToTop = () => {
  const scrollToPageTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className=" fixed bottom-8 right-8 md:bottom-16 md:right-16 z-50">
      <div
        className="p-2 bg-slate-200 rounded-full hover:cursor-pointer active:bg-slate-300"
        onClick={scrollToPageTop}
        title="回到页面顶部"
      >
        <FaChevronUp size="2em" className="text-gray-600" />
      </div>
    </div>
  );
};
