export const oders = JSON.parse(localStorage.getItem('oders')) || [];

export function addOrder() {
    oders.unshift(oder);

}

function saveTOStorage() {
    localStorage.setItem('oders', JSON.stringify(oders));
}