'use client'

import ImageSize from "../../../utils/imageSizes";
import Image from "next/image";
import "./style.scss";
import Button from "../ui_components/button/Button";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useRef, useState } from "react";
import jsPDF from "jspdf";

export default function Certificate(){
    const [Firstname, setFirstname] = useState('');
    const [Lastname, setLastname] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleDownloadCertificate = () => {
        const canvas = canvasRef.current;
        
        // Check if the canvas is null
        if (!canvas) {
          console.log('Canvas not found');
          return;
        }
      
        const ctx = canvas.getContext('2d');
        
        // Check if the context is null
        if (!ctx) {
          console.log('2D context not found');
          return;
        }
      
        // Load the image and draw it on the canvas
        const background = new window.Image();
        background.src = '/resources/certificate/certificate-1.png'; // Correct path to your certificate image
      
        background.onload = () => {
          // Draw the background image on the canvas
          ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
      
          // Now add the text on top of the background
          ctx.font = "30px Arial";
          ctx.fillStyle = "#000000";
          ctx.textAlign = "center";
          ctx.fillText(`${Firstname} ${Lastname}`, canvas.width / 2, canvas.height / 2);
      
          // Convert canvas to image
          const imgData = canvas.toDataURL('image/png');
      
          // Create a PDF using jsPDF
          const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: [canvas.width, canvas.height]
          });
      
          // Add the image to the PDF
          pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      
          // Download the generated PDF
          pdf.save('certificate.pdf');
        };
      };
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
        <p className="name">Enter your name</p>

        <input type="text" placeholder="First Name" className="username" value={Firstname} onChange={(e) => setFirstname(e.target.value)}/>
        <input type="text" placeholder="Last Name" className="username" value={Lastname} onChange={(e) => setLastname(e.target.value)}/>

        <Button onClick={handleDownloadCertificate}>
            Submit
            <FaAngleRight />
        </Button>

        <canvas ref={canvasRef} width={800} height={600} style={{ display: 'none' }}></canvas>

        <Link href="/" className="Return-home">
                Return to home
        </Link>
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