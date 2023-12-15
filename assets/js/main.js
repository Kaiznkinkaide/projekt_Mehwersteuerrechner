
let change = () => {
    let radio1 = document.getElementById("radio1").checked
    let radio2 = document.getElementById("radio2").checked
    let outputh3 = document.getElementById("output2-h3")
    let outputLabel = document.getElementById("nettoBrutto")
    if(radio1){
        outputh3.innerHTML = "Bruttobetrag (Endpreis)"
        outputLabel.innerHTML = "Nettobetrag (Preis ohne Mehrwersteuer) in Euro<span>*</span>"
    } else if (radio2){
        outputh3.innerHTML = "Nettobetrag"
        outputLabel.innerHTML = "Bruttobetrag (Preis inklusive Mehrwersteuer) in Euro <span>*</span>"
    }
}


let calc = () => {
    let input = Number(document.querySelector("#eingabe").value)
    console.log(input);
    let output1 = document.getElementById("output1-p")
    let output2 = document.getElementById("output2-p")
    let radio1 = document.getElementById("radio1").checked
    let radio2 = document.getElementById("radio2").checked
    let radio3 = document.getElementById("radio3").checked
    let radio4 = document.getElementById("radio4").checked
    let neunzehn = input * 0.19
    let sieben = input * 0.07
    let plusMehrnNeunzehn = input * (1 + 0.19)
    let minusMehrNeunzehn = input / (1 + 0.19)
    let plusMehrnSieben = input * (1 + 0.07)
    let minusMehrSieben = input / (1 + 0.07)
    
    if (radio1 && radio3){
        output1.innerHTML = Math.abs((input - plusMehrnNeunzehn).toFixed(2))
        output2.innerHTML = plusMehrnNeunzehn.toFixed(2)
        
    } else if (radio2 && radio3){
        output1.innerHTML = (input - minusMehrNeunzehn).toFixed(2)
        output2.innerHTML = minusMehrNeunzehn.toFixed(2)
    } else if (radio1 && radio4){
        output1.innerHTML = Math.abs((input - plusMehrnSieben).toFixed(2))
        output2.innerHTML = plusMehrnSieben.toFixed(2)
    } else if (radio2 && radio4){
        output1.innerHTML = Math.abs((input - minusMehrSieben).toFixed(2))
        output2.innerHTML = minusMehrSieben.toFixed(2)
    }
    
}





// let neunzehn = input * 0.19
// let sieben = input * 0.07
// let plusMehrnNeunzehn = input + neunzehn
// let minusMehrNeunzehn = input - neunzehn
// let plusMehrnSieben = input + sieben
// let minusMehrSieben = input - sieben








