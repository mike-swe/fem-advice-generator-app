let AdSlip = () => {

    const  AdviceID = document.querySelector("#advice-id")

    const Advice = document.querySelector("#output-text")

    const button = document.querySelector("#generatorBtn")


    fetch("	https://api.adviceslip.com/advice")

    .then(res => {

       return res.json()

    })

    .then(data => {

        const AdvicedataOBj = data.slip;

        const adviceNo = data.slip;

       button.addEventListener("click", () => {

        Advice.innerHTML = `${AdvicedataOBj.advice}`

        AdviceID.innerHTML = `${adviceNo.id}`

       })

    }).catch(error => {

        console.log("Error")

    })
} 