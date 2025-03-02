import { Zoom } from "react-awesome-reveal";
import "./LoadAnimation.css";
import Image from "next/image";

export const LoadAnimation = () => {
  return (
    <div className="app__loader">
      <div className="app__imageParent">
        <svg height="130" width="130" className="app__loaderSvg">
          <polygon
            points="55 3,105 30,105 87,55 120,3 87,3 30"
            className="app__loaderSvgHex"
          />
        </svg>
        <Zoom>
          <div className="app__loaderImageParent">
            <Image
              className="app__loaderImage"
              src="/images/logo.png"
              alt="website logo"
              width={75}
              height={75}
            />
          </div>
        </Zoom>
      </div>
    </div>
  );
};
