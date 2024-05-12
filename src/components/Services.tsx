import Link from "next/link";
import Container from "./Container";
import ServiceCard from "./ServiceCard";

export default function Services(){
    return(
        <section>
            <div className="bg-[image:linear-gradient(to_bottom,white_0%,white_50%,#f0f6fe_50%,#f0f6fe_100%)]  py-10 lg:py-20 text-center text-indigo-700 text-4xl font-bold uppercase">
                <Container>
                    <h2>Serviços</h2>
                </Container>
            </div>
            <div className=" bg-third-blue">
                <Container>
                    <div className="lg:grid grid-cols-3 gap-14 pb-1 lg:pb-10">
                        <ServiceCard 
                            number = {1}
                            description ={"Prover suporte para a avaliação de novos produtos e tecnologias"}
                        />
                        <ServiceCard 
                            number = {2}
                            description ={"Reduzir riscos na utilização de novos produtos e tecnologias"}
                        />
                        <ServiceCard 
                            number = {3}
                            description ={"Orientar o mercado na escolha de novos produtos e tecnologias"}
                        />
                        <ServiceCard 
                            number = {4}
                            description ={"Estimular o processo de inovação tecnológica"}
                        />
                        <ServiceCard 
                            number = {5}
                            description ={"Buscar a concessão de uma aprovação técnica, com base em um documento de avaliação técnica"}
                        />
                    </div>
                </Container>
            </div>
            <div className="bg-[image:linear-gradient(to_top,white_0%,white_50%,#f0f6fe_50%,#f0f6fe_100%)] py-10 lg:py-20 flex">
                <Link href={"#faleComEspecialista"} className="mx-auto bg-amber-300 text-indigo-700 transition-colors duration-300 ease-in-out hover:bg-indigo-700 hover:text-amber-300 rounded-lg px-16 py-3 font-bold">Fale com um especialista</Link>
            </div>
        </section>
    )
}