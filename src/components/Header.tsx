import Image from "next/image";
import logo from '@/assets/images/tesis-logo.png';
import Container from "./Container";

export default function Header(){
    return(
        <header className="w-full py-8 bg-[image:linear-gradient(to_right,#f9fafb_0%,#f9fafb_82%,white_82%,white_100%)] ">
            <Container>
                <Image 
                    src={logo}
                    alt="Tesis - Engenharia e Gestão de Programas de Qualidade, Meio Ambiente e Inovação"
                />
            </Container>
        </header>
    )
}