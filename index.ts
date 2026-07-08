// This is our main function
function fizzbuzz(): void {
    for (let i = 1; i <= 400; i++) {
        let out : string = "";

        if (i % 3 == 0) {
            out += "Fizz";
        }

        if (i % 5 == 0) {
            out += "Buzz";
        }

        if (i % 7 == 0) {
            if (i % 3 == 0 || i % 5 == 0) {
                out += "Bang";
            } else {
                out = "Bang";
            }
        }

        if (i % 11 == 0) {
            out = "Bong";
        }

        if (i % 13 == 0) {
            if (out.includes("B")) {
                let idx : number = out.indexOf("B");
                out = out.substring(0, idx) + "Fezz" + out.substring(idx);
            } else {
                out += "Fezz";
            }
        }

        if (i % 17 == 0) {
            let out2 : string = "";
            for (let j = out.length - 4; j >= 0; j -= 4) {
                out2 += out.substring(j, j + 4);
            }
            out = out2;
        }

        if (out == "") {
            console.log(i);
        } else {
            console.log(out);
        }

    }
}
// Now, we run the main function:
fizzbuzz();