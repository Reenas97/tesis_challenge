type Props = {
    number: number,
    description: string

}

export default function ServiceCard({number, description}: Props){
    return(
        <div className="mb-8 lg:mb-0">
            <div className="mx-auto left-auto bg-gradient-to-b from-sixth-blue to-fifth-blue w-28 h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center relative z-10">
                <p className="text-white text-5xl">
                    {number}
                </p>
            </div>
            <div className="bg-white lg:min-h-[250px] 2xl:min-h-[200px] rounded-xl px-14 pb-14 pt-20 text-center shadow-[0px_6px_10px_0px_#c6cbd2] -mt-14">
                <p className="text-black text-lg">{description}</p>
            </div>
        </div>
    )
}