import React, {SVGProps} from "react";

type IconType = {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

const TweetBoxIcon = ({ Icon }: IconType) => {
  return (
    <Icon className="w-5 h-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-125" />
  );
};

export default TweetBoxIcon;
