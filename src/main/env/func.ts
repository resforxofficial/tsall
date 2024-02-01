/**
 * find element that starts array
 * @param array An array want to check to
 * @param searchStr A string want to check to string
 * @returns boolean to true or false
 */
export function startElement(array: any[], searchStr: string | number): boolean {
    if (array[0] === searchStr) {
        return true;
    }

    return false;
}

function lastElement(arr: any[]) {
    return arr[arr.length - 1];
}

/**
 * find element that ends array
 * @param array An array want to check to
 * @param searchStr A string want to check to string
 * @returns boolean to true or false
 */
export function endElement(array: any[], searchStr: string | number): boolean {
    if (lastElement(array) === searchStr) {
        return true;
    }

    return false;
}
