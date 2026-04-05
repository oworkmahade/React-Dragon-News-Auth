import MarqueeModule from "react-fast-marquee";
import {Link} from "react-router-dom";

const Marquee = MarqueeModule.default;
const BreakingNews = () => {
  return (
    <div className="flex flex-row items-center gap-4 py-2 my-4 bg-gray-200 border-2 border-gray-600 breakingNews">
      <button className="rounded-none btn btn-secondary bg-[#d9262f]">
        Latest
      </button>
      <Marquee speed={150} pauseOnHover={true} gradient={false}>
        
        <Link to='#'>
                I can be a React component, multiple React components, or just some
        text.
        </Link>


      </Marquee>
    </div>
  );
};

export default BreakingNews;
