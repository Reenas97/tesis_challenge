import logo from "@/assets/images/tesis-logo.png";
import Image from "next/image";
import Container from "./Container";

export default function Footer(){
    return(
        <footer className="bg-second-gray py-10 lg:py-20">
            <Container>
                <Image 
                    src={logo}
                    alt="Tesis"
                    className="d-block mx-auto opacity-80"
                />
            </Container>
        </footer>
    )
}