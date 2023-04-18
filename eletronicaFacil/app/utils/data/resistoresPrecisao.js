const rp = [
    1,
    1.05,
    1.1,
    1.15,
    1.21,
    1.27,
    1.33,
    1.4,
    1.47,
    1.54,
    1.62,
    1.69,
    1.78,
    1.87,
    1.96,
    2.05,
    2.15,
    2.26,
    2.37,
    2.49,
    2.61,
    2.74,
    2.87,
    3.01,
    3.16,
    3.32,
    3.48,
    3.65,
    3.83,
    4.02,
    4.22,
    4.42,
    4.64,
    4.87,
    5.11,
    5.36,
    5.62,
    5.9,
    6.19,
    6.49,
    6.81,
    7.15,
    7.5,
    7.87,
    8.25,
    8.66,
    9.09,
    9.53
]

function multiplica(num) {
    return Math.round((num * 10), -2);
    //return num * 10;
}

const rp2 = rp.map(multiplica)
const rp3 = rp2.map(multiplica)
const rp4 = rp3.map(multiplica)
const rp5 = rp4.map(multiplica)
const rp6 = rp5.map(multiplica)
const rp7 = rp6.map(multiplica)

const resistoresPrecisao = rp.concat(rp2.concat(rp3.concat(rp4.concat(rp5.concat(rp6.concat(rp7))))))
//const resistoresPrecisao = rp.concat(rp2.concat(rp3))

export default resistoresPrecisao;