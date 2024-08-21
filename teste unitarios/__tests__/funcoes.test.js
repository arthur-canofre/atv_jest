const funcoes = require('../src/funcoes')

test('testar a funcao de adicao', () =>{
    expect(funcoes.adi(2,2)).toBe(4)
})

test('testar a funcao de subtracao', () =>{
    expect(funcoes.subt(2,2)).toBe(0)
})

test('testar a funcao de multiplicacao', () =>{
    expect(funcoes.mult(2,3)).toBe(6)
})

test('testar a funcao de divisao', () =>{
    expect(funcoes.divi(8,2)).toBe(4)
})

test('testar a divisao por zero', () =>{
    expect(funcoes.divi(2,0)).toBe("dividir por zero nao e possivel")
})