/*
1. 변수에는 _ 말고 다른 특수문자는 못들어간다.
2. 숫자 시작 불가능
*/

const vanameCheck = (vxl: string): boolean => {
    // 첫 문자가 숫자인 경우 false 반환
    if (!isNaN(Number(vxl[0]))) {
        return false;
    }

    // 문자열에 _ 외의 특수문자가 포함된 경우 false 반환
    if (/[^a-zA-Z0-9_]/.test(vxl)) {
        return false;
    }

    if (vxl[0] === "_") {
        return false;
    }

    // 그 외의 경우는 true 반환
    return true;
}

export default vanameCheck;