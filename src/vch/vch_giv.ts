const valuecheck = (vax: string): boolean => {
    try {
        eval(vax)
    } catch (e) {
        console.log(String(e));
        return false;
    }

    return true;
}

export default valuecheck;