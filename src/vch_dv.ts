const dvcheck = (val: string): boolean => {
    // val의 첫 문자가 $, m, i 중 하나인지 확인
    if (['m', 'i'].includes(val[0])) {
        return true;
    }
  
    // val이 'mut' 또는 'immut'으로 시작하고 't'로 끝나는지 확인
    if (val.startsWith('mut') || val.startsWith('immut')) {
        if (val.endsWith('t')) {
            return true;
        }
    }
  
    // 그 외의 경우는 false를 반환
    return false;
}
