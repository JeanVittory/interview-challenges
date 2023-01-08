export default function buscarAislado(numeros: number[]): number {
  let unPairList: number[] = [];
  let pairList: number[] = [];
  numeros.forEach((numero) => {
    if (numero % 2 === 0) return pairList.push(numero);
    return unPairList.push(numero);
  });
  let result = unPairList.length === 1 ? unPairList[0] : pairList[0];

  return result;
}
