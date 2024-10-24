
const formatCurency = value => {
    return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',     
    }).format(value /100)
}



export default formatCurency

