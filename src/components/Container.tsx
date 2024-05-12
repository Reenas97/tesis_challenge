import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export default function Container({children}: Props){
    return(
        <div className="w-full max-w-[1250px] 2xl:max-w-[1700px] px-4 mx-auto">
            {children}
        </div>
    )
}