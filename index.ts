function fizzbuzz(): void {
    //length of generic keyword in output
    const WORD_LENGTH:number = 4;

    for (let i = 1; i <= 400; i++) {
        const outList : string[] =[];

        if (i % 3 == 0) {
            outList.push("Fizz");
        }

        if (i % 5 == 0) {
            outList.push("Buzz");
        }

        if (i % 7 == 0) {
            outList.push("Bang");
        }

        if (i % 11 == 0) {
            outList.length = 0;
            outList.push("Bong");
        }

        if (i % 13 == 0) {
            const index:number = outList.findIndex(message => message[0] == 'B');
            if (index == -1)
                outList.push("Fezz");
            else
                outList.splice(index, 0, "Fezz");
        }

        const out : string = outList.join("");
        if (i % 17 == 0) {
            outList.length = 0;
            for (let j = out.length - WORD_LENGTH; j >= 0; j -= 4) {
                outList.push(out.substring(j, j + WORD_LENGTH));
            }
        }

        if (out == "") {
            console.log(i);
        } else {
            console.log(outList.join(""));
        }

    }
}

fizzbuzz();