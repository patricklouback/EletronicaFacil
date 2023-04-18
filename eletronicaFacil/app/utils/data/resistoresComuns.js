const rc = [
    1,
    1.1,
    1.2,
    1.3,
    1.5,
    1.6,
    1.8,
    2,
    2.2,
    2.4,
    2.7,
    3,
    3.3,
    3.6,
    3.9,
    4.3,
    4.7,
    5.1,
    5.6,
    6.2,
    6.8,
    7.5,
    8.2,
    9.1,
]

function multiplica(num) {
    return num * 10;
}

const rc2 = rc.map(multiplica)
const rc3 = rc2.map(multiplica)
const rc4 = rc3.map(multiplica)
const rc5 = rc4.map(multiplica)
const rc6 = rc5.map(multiplica)
const rc7 = rc6.map(multiplica)

const resistoresComuns = rc.concat(rc2.concat(rc3.concat(rc4.concat(rc5.concat(rc6.concat(rc7))))))
//const resistoresComuns = rc.concat(rc2.concat(rc3))

export default resistoresComuns;