'use client'

import { insertMaskInPhone } from "@/functions/phoneMask"
import { useEffect, useState } from "react"

export default function Form(){
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        phone: ""
    })

    const [emptyValue, setEmptyValue] = useState(false)
    const [validEmail, setValidEmail] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [phoneMask, setPhoneMask] = useState("")
    const [formMessage, setFormMessage] = useState("")

    useEffect(() => {
        if (formSubmitted) {
            const emptyValues = Object.values(form).some(obj => obj === "")
            setEmptyValue(emptyValues)

            const emailPattern = /[a-z]+@[a-z]+\.com(\.br)*/
            const isEmailValid = emailPattern.test(form.email.toLowerCase())
            setValidEmail(isEmailValid)

            const isFormValid = !emptyValues && isEmailValid
            setFormValid(isFormValid)
        }
    }, [form, formSubmitted])

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setFormSubmitted(true);

        if (formValid) {
            try {
                fetch("http://localhost:3000", {method: "POST",body: JSON.stringify(form)})
                setFormMessage("Dados enviados com sucesso!")
                setTimeout(() => {
                    setFormMessage("")
                }, 8000)

            } catch (error) {
                console.log(error)
                setFormMessage("Ocorreu um erro. Tente novamente mais tarde.")
            }
        }
    }

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhone = insertMaskInPhone(event.target.value)
        setPhoneMask(formattedPhone)
        handleInputChange(event)
    }
    
    return(
        <div className="bg-white rounded-xl p-6 lg:p-12 w-full">
            <p className=" text-indigo-700 text-2xl font-bold">Informe seus dados <br className="hidden lg:block"/> para falar com um especialista:</p>
            <form 
                className="mt-12"
                onSubmit={(e) => {handleSubmit(e)}}
            >
                <div className="flex items-center justify-between mb-5">
                    <label 
                        className=" text-indigo-700 font-medium max-w-[10%] text-lg" 
                        htmlFor="name"
                    >
                        Nome:
                    </label>
                    <div className="w-[65%]  md:w-[80%]">
                        <input 
                            type="text" 
                            className="bg-third-blue w-full p-2 lg:p-3 rounded-lg border-solid border border-primary-gray outline-none text-indigo-700" 
                            name="name"
                            id="name"
/*                             required */
                            onChange={(e) => handleInputChange(e)}
                        />
                        {emptyValue && form["name"] == "" ? <span className="block text-red-600 text-end">O campo nome precisa ser preenchido</span> : ""}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-5">
                    <label 
                        className=" text-indigo-700 font-medium max-w-[10%] text-lg" 
                        htmlFor="email"
                    >
                        Email:
                    </label>
                    <div className="w-[65%]  md:w-[80%]">
                        <input 
                            className="bg-third-blue w-full p-2 lg:p-3 rounded-lg border-solid border border-primary-gray outline-none text-indigo-700"
                            type="email" 
                            name="email"
                            id="email"
/*                             required */
                            onChange={(e) => handleInputChange(e)}
                        />
                        {emptyValue && form["email"] == "" ? <span className="block text-red-600 text-end">O campo email precisa ser preenchido</span> : ""}
                        {!validEmail && form["email"] !== "" ? <span className="block text-red-600 text-end">Digite um email válido</span> : ""}
                    </div>

                </div>
                <div className="flex items-center justify-between mb-5">
                    <label 
                        className=" text-indigo-700 font-medium max-w-[10%] text-lg" 
                        htmlFor="company"
                    >
                        Empresa:
                    </label>
                   <div className="w-[65%]  md:w-[80%]">
                        <input 
                            type="text" 
                            className="bg-third-blue w-full p-2 lg:p-3 rounded-lg border-solid border border-primary-gray outline-none text-indigo-700"
                            name="company"
                            id="company"
/*                             required */
                            onChange={(e) => handleInputChange(e)}
                        />
                        {emptyValue && form["company"] == "" ? <span className="block text-red-600 text-end">O campo empresa precisa ser preenchido</span> : ""}
                    </div>
                </div>
                <div className="flex items-center justify-between mb-5">
                    <label 
                        className=" text-indigo-700 font-medium max-w-[10%] text-lg" 
                        htmlFor="phone"
                    >
                        Telefone:
                    </label>
                    <div className="w-[65%]  md:w-[80%]">
                        <input 
                            type="tel" 
                            className="bg-third-blue w-full p-2 lg:p-3 rounded-lg border-solid border border-primary-gray outline-none text-indigo-700"
                            name="phone"
                            id="phone"
                            value={phoneMask}
                            onChange={(e) => {
                                handlePhoneChange(e);
                                handleInputChange(e);
                            }}
                            minLength={11}
                            maxLength={11}
                        />
                        {emptyValue && form["phone"] == ""? <span className="block text-red-600 text-end">O campo telefone precisa ser preenchido</span> : ""}
                    </div>
                </div>
                <button
                    className={`${formValid ? "bg-indigo-700" : "bg-second-blue"} rounded-lg p-4 text-white font-medium text-lg lg:text-2xl w-full uppercase mt-6 ${formValid ? "" : "cursor-not-allowed"}`}
                    type="submit"
                    style={{ cursor: formValid ? "pointer" : "not-allowed" }}
                >
                    Fale com um especialista
                </button>
            </form>
            {formMessage &&
                <p className=" text-green-600 mt-4">{formMessage}</p>
            }
        </div>
    )
}