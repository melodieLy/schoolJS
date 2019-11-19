module.exports = {
    add(... values){
        return values.reduce((prev, curr) => prev + curr, 0);
    },

    multiply(... values){
        return values.reduce((prev, curr) => prev * curr, 1);
    }
}