function adi(n1,n2){
    return n1 + n2
}

function subt(n1,n2){
    return n1 - n2
}

function mult(n1,n2){
    return n1 * n2
}

function divi(n1,n2){
    if (n2){
        return n1 / n2
    }else{
        return "dividir por zero nao e possivel"
    }
}

module.exports = { divi, mult, subt, adi }