import ImageSize from "../../../../utils/imageSizes";
import Image from "next/image";
import "./style.scss";
import Button from "@/app/ui_components/button/Button";
import { FaAngleRight } from "react-icons/fa6";

export default function WelcomePage(){
    return (
        <main>
      <div className="left">
        <div className="vector img">
          <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector.svg" alt={"vector svg"}>
          </Image>
        </div>
        <div className="vector-2 img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-2.svg" alt={"vector svg"}>
          </Image>
        </div>
        <div className="image img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/image.svg" alt={"vector svg"}>
          </Image>
        </div>
        <div className="red-circle img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-3.svg" alt={"vector svg"}>
          </Image>
        </div>
      </div>
      <div className="middle">
        <div className="logo">
      <Image
      sizes={ImageSize.cardSize}
        fill
        src = "/resources/images/Bracket Logo 1.png" alt="gdsc logo">
      </Image>
        </div>

      <div className="welcome">
      <p className="welcome-text">
        Welcome to GDSC JDCOEM <br/>
        Certification Portal
      </p>
      </div>
      <Button 
      link = "/Gmail">
        Proceed
        <FaAngleRight />
      </Button>
      </div>
      <div className="right">
        <div className="green-circle img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-8.svg" alt={"vector svg"}>
          </Image>
        </div>
        <div className="wrapper">
            <div className="vector-10 img">
            <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-10.svg" alt={"vector svg"}>
          </Image>
            </div>
            <div className="vector-5 img">
            <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-5.svg" alt={"vector svg"}>
          </Image>
            </div>
            <div className="vector-6 img">
            <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-6.svg" alt={"vector svg"}>
          </Image>
            </div>
        </div>
        
        <div className="vector-7 img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-7.svg" alt={"vector svg"}>
          </Image>
        </div>

        <div className="vector-4 img">
        <Image 
            sizes={ImageSize.cardSize}
            fill
            src="/resources/images/vector-4.svg" alt={"vector svg"}>
          </Image>
        </div>
      </div>
    </main> 
    )
}