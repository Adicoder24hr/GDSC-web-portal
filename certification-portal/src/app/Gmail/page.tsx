'use client'

import Image from "next/image"
import ImageSize from "../../../utils/imageSizes"
import "./style.scss";
import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "../ui_components/button/Button";

export default function Gmail(){
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setLoading(true);

        try{
            const response = await axios.post('http://localhost:8080/api/v1/auth/check-mail', {
                email, 
                password: "Adiwar24hr@"
            });
        
            console.log("Response status:", response.status);
            console.log("Response data:", response.data);
        
            if (response.status === 200) {
                router.push("/Certificate");
            } else {
                router.push("/Error");
            }
        }
        catch(e){
            console.error('Error checking email:', e);
            router.push("/Error");
        } finally {
            setLoading(false);
          }
    }

    return (
        <main>
            <div className="left">
                <div className="wrapper">
                    <div className="vector-2 img">
                    <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (2).svg" alt={"vector svg"}>
                    </Image>
                    </div>

                    <div className="vector-5 img">
                    <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (5).svg" alt={"vector svg"}>
                    </Image>
                    </div>

                    <div className="vector-4 img">
                    <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (4).svg" alt={"vector svg"}>
                    </Image>
                    </div>
                </div>

                <div className="vector-3 img">
                    <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (3).svg" alt={"vector svg"}>
                    </Image>
                </div>
                <div className="vector-1 img">
                <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (1).svg" alt={"vector svg"}>
                    </Image>
                </div>

                <div className="green-circle img">
                <Image 
                    sizes={ImageSize.cardSize}
                    fill
                    src="/resources/gmail/vector (10).svg" alt={"vector svg"}>
                </Image>
                </div>
            </div>
            <div className="middle">
                <p className="email">
                    Enter your email
                </p>
                <input type="text" placeholder="@gmail.com" className="input-gmail" value={email} onChange={(e) => setEmail(e.target.value)}/>

                <Button onClick={handleSubmit} disabled={loading}>
                {loading ? 'Loading...' : 'Submit'}
                    <FaAngleRight />
                </Button>

                <Link href="/" className="go-back">
                Go back
                </Link>
            </div>
            <div className="right">
                <div className="vector-6 img">
                <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (6).svg" alt={"vector svg"}>
                    </Image>
                </div>

                <div className="vector-7 img">
                <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (7).svg" alt={"vector svg"}>
                    </Image>
                </div>
                <div className="vector-8 img">
                <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (8).svg" alt={"vector svg"}>
                    </Image>
                </div>

                <div className="vector-9 img">
                <Image 
                        sizes={ImageSize.cardSize}
                        fill
                        src="/resources/gmail/vector (9).svg" alt={"vector svg"}>
                    </Image>
                </div>
            </div>
        </main>
    )
}