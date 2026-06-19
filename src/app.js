function generadorDominios() {
    let part1 = ["descubre", "conoce"];
    let part2 = ["nuestro", "vuestro"];
    let part3 = ["mundo", "planeta"];
    let final = [".com", ".es"];

    for (let i = 0; i < part1.length; i++) {
        for (let j = 0; j < part2.length; j++) {
            for (let k = 0; k < part3.length; k++) {
                for (let l = 0; l < final.length; l++) {


                    let domain = part1[i] + part2[j] + part3[k] + final[l];

                    console.log(domain);

                }
            }
        }
    }
}

generadorDominios();