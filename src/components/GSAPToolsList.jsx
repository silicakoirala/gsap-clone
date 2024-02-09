import React from 'react';
import Scroll from "../assets/svgexport-41.svg";
import SVG from "../assets/svgexport-42.svg";
import Text from "../assets/Screenshot 2024-02-05 194726.png";
import UI from "../assets/Screenshot 2024-02-05 194833.png";
import GSAPTools from './GSAPTools';

const GSAPToolsList = () => {
  const data = [
    {
      key: '0',
      imgSrc: Scroll,
      title: 'Scroll',
      titleColor: '#fec5fb',
      text: "Turn scrolling into silky-smooth storytelling.",
      buttonText: "Scroll"
    },
    {
      key: '1',
      imgSrc: SVG,
      title: 'SVG',
      titleColor: '#ff8709',
      text: "Move, morph and much more with our SVG plugins.",
      buttonText: "SVG"
    },
    {
      key: '2',
      imgSrc: Text,
      title: 'Text',
      titleColor: '#9d95ff',
      text: "Leave them lost for words with seamless text effects.",
      buttonText: "Text"
    },
    {
      key: '3',
      imgSrc: UI,
      title: 'UI Interactions',
      titleColor: '#00bae2',
      text: "Create polished, engaging and accessible interactions.",
      buttonText: "UI"
    },


  ];
  return (
    <div className='flex flex-col my-40'>
      {data.map((item) => {
        return (
          <GSAPTools
            key={item.key}
            imgSrc={item.imgSrc}
            title={item.title}
            titleColor={item.titleColor}
            text={item.text}
            buttonText={item.buttonText}
          />
        )
      })
      }
    </div>
  )
}

export default GSAPToolsList;