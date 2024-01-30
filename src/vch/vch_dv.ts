/*
mut, immut
1. startswith m, i -> true
2. startswith number or sp-str(특수문자) -> false
3. endswith only t -> true
4. endswith number or alphabets except t (특수문자 포함) -> false
5. 그리고 철차가 (m, u, t), (i, m, m, u, t) 인지 확인하기 -> 조건부 boolean
*/

const dvcheck = (val: string): boolean => {
    // val의 첫 문자가 m 또는 i인지 확인
    if (!['m', 'i'].includes(val[0])) {
        return false;
    }

    // val의 마지막 문자가 t인지 확인
    if (!val.endsWith('t')) {
        return false;
    }

    // val이 'mut' 또는 'immut'인지 확인
    if (val === 'mut' || val === 'immut') {
        return true;
    }

    // 그 외의 경우는 false를 반환
    return false;
}

export default dvcheck;