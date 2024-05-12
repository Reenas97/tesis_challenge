

export const insertMaskInPhone = (phone: string) =>{
    const noMask = phone.replace(/\D/g, '')
    const {length} = noMask
    if(length <= 11){
        return noMask.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    }
    return phone;
}