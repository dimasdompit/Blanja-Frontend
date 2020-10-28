// const formatCurrency = (num) => {
//     return `$ ${Number(num.toFixed(1)).toLocaleString()} `
// }

// export default formatCurrency

export default function formatCurrency(num) {
    return num === undefined ? " " : "$" + Number(num.toFixed(1)).toLocaleString() + " ";
}