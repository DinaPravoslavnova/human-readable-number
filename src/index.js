module.exports = function toReadable(number) {
    const by19Array = [
            "",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ],
        tensArray = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

    let numberString = number.toString(),
        units = by19Array[numberString.slice(-1)],
        tens = tensArray[numberString.slice(-2, -1)],
        hundred = by19Array[numberString.slice(-3, -2)],
        readable;

    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return by19Array[number];
    }

    if (number < 100) {
        readable = `${tens} ${units}`;
        return readable.trim();
    }

    if (numberString[1] === "1") {
        tens = by19Array[numberString.slice(-2)];
        readable = `${hundred} hundred ${tens}`;
        return readable;
    }

    readable = `${hundred} hundred ${tens} ${units}`;
    return readable.replace(/  /, " ").trim();
};
