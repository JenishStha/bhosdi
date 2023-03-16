import Markdown from "react-markdown"
import { getButtonAppearance } from "utils/button"
import ButtonLink from "../elements/button-link"
import NextImage from "../elements/image"

const Hero = ({ data }) => {
  return (
    <main className="flex flex-col md:flex-row items-center overflow-y-hidden w-full justify-between py-12 h-screen">
      {/* Left column for content */}
      <div className="flex-1 flex flex-col justify-center z-10 sm:pr-8 pl-8">
        {/* Hero section label */}
        <p className="uppercase tracking-wide font-semibold">{data.label}</p>
        {/* Big title */}
        <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
        {/* Description paragraph */}
        <p className="text-gray-500 text-xl mb-6">{data.description}</p>
        {/* Buttons row */}
        <div className="flex flex-row flex-wrap gap-4">
          {data.buttons.map((button) => (
            <ButtonLink
              button={button}
              appearance={getButtonAppearance(button.type, "light")}
              key={button.id}
            />
          ))}
        </div>
        {/* Small rich text */}
        <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
          <Markdown>{data.smallTextWithLink}</Markdown>
        </div>
      </div>
      {/* Right column for the image */}
      <div className="flex-1 w-full md:w-6/12 mt-6 md:mt-0">
        <NextImage media={data.picture} />
      </div>
    </main>
  )
}

export default Hero

// import Markdown from "react-markdown"
// import { getButtonAppearance } from "utils/button"
// import ButtonLink from "../elements/button-link"
// import NextImage from "../elements/image"

// const Hero = ({ data }) => {
//   console.log(data.picture)
//   return (
//     <main className="flex flex-col md:flex-row items-center justify-between pb-12">
//       {/* Right column for the image */}
//       <div className="flex-shrink-0 w-full z-1">
//         <NextImage media={data.picture} />

//         {/* Left column for content */}
//         <div className=" absolute text-5xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
//           {/* Hero section label */}
//           <p className="uppercase tracking-wide font-semibold">{data.label}</p>
//           {/* Big title */}
//           <h1 className="title mt-2 sm:mt-0 mb-4 sm:mb-2">{data.title}</h1>
//           {/* Description paragraph */}
//           <p className="text-xl mb-6">{data.description}</p>
//           {/* Buttons row */}
//           <div className="flex flex-row flex-wrap gap-4">
//             {data.buttons.map((button) => (
//               <ButtonLink
//                 button={button}
//                 appearance={getButtonAppearance(button.type, "light")}
//                 key={button.id}
//               />
//             ))}
//           </div>
//           {/* Small rich text */}
//           <div className="text-base md:text-sm mt-4 sm:mt-3 rich-text-hero">
//             <Markdown>{data.smallTextWithLink}</Markdown>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }

// export default Hero
