import Container from "./Container";
import Form from "./Form";

export default function SectionMain(){
    return(
        <main id="faleComEspecialista" className="bg-gradient-to-b from-indigo-700 to-primary-blue py-10 lg:py-20">
            <Container>
                <div className="w-full lg:grid grid-cols-2 gap-11 items-center">
                    <div className="flex-1 col-span-1 mb-8 lg:mb-0">
                        <h1 className="text-white text-3xl lg:text-4xl font-bold">Desenvolvimento e gestão de <br className="hidden lg:block"/> serviços tecnológicos!</h1>
                        <ul className=" mt-8">
                            <li className="text-white text-lg flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4ade80" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                Gestão técnica de Programas Setoriais de Qualidade
                            </li>
                            <li className="text-white text-lg flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4ade80" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                Avaliação de produtos inovadores para construção civil
                            </li>
                            <li className="text-white text-lg flex gap-1 items-center"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4ade80" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>
                                Realização de ensaios de materiais de construção
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-1">
                        <Form />
                    </div>
                </div>
            </Container>
        </main>
    )
}