function getRamdomInt(
    min,
    max /*주석도 포매팅해줍니다.*/
)
{
    return Math.floor(
        Math.random()
        *(max-min)) + min;
}

console.log(
    getRamdomInt
    (10,20)
);
