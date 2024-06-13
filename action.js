function loadChat() {
  const testStr = "хочу открыть вклад"
  const testStr1 = "открыть вклад"
  const testStr2 = "не"

  const productNames = [
    "Вклад Первый",
    "Управляемый",
    "История успеха",
    "Ваш пенсионный",
    "Большие возможности",
  ]
  const confirmYes = "да"
  const confirmAgree = "согласен"

  const no = "нет"
  const notAgree = "не согласен"

  let userContribution

  const chatOutput = document.querySelector(".chat_output")
  const sendBtn = document.querySelector(".send_btn")
  const input = document.querySelector(".input")

  sendBtn.addEventListener("click", buttonAction)

  function buttonAction() {
    writeToChat(input.value, false)
    getString(input.value)
    input.value = ""
  }

  function writeToChat(message, isRecived) {
    let messageHTML = `<div class="chat_message ${
      isRecived ? "recived" : "send"
    }">${message}</div>`
    chatOutput.innerHTML += messageHTML
  }

  function getString(string) {
    if (
      (string.toLowerCase().includes(testStr) &&
        !string.toLowerCase().includes(testStr2)) ||
      (string.toLowerCase().includes(testStr1) &&
        !string.toLowerCase().includes(testStr2))
    ) {
      userContribution = productNames.find((productName) =>
        string.toLowerCase().includes(productName.toLowerCase())
      )
      if (!userContribution) {
        writeToChat("выберите название вклада", true)
        writeToChatButton(productNames, false)
      } else {
        getProducts(userContribution)
      }
    } else writeToChat("Я не понял ваш запрос", true)
  }

  function getProducts(userContribution) {
    fetch("http://localhost:3000/listDeposits")
      .then((res) => res.json())
      .then((result) => {
        const currentDeposite = result.deposits.filter(
          (deposite) => deposite.productName === userContribution
        )
        const ratesSort = currentDeposite[0].products[0].terms[0].rates.sort(
          (a, b) => a.minBalance - b.minBalance,
          0
        )

        const minBalance = ratesSort[0].minBalance

        const message = `<ul><li>название вклада "${currentDeposite[0].productName}"</li>
            <li>срок вклада ${currentDeposite[0].products[0].terms[0].minimumTerm} дн.</li>
            <li>процентная ставка ${currentDeposite[0].products[0].maxProfitRate} %</li>
            <li>минимальная сумма вклада ${minBalance} руб.</li></ul>
            <div>Вы согласны открыть вклад?</div>`
        writeToChat(message, true)
      })
      .then(() => {
        chatOutput.scrollIntoView({ behavior: "smooth", block: "end" })
        sendBtn.removeEventListener("click", buttonAction)
        sendBtn.addEventListener("click", () => actionConfirm(input.value))
      })
      .catch((error) => {
        console.log(error)
        const message =
          "Сервис временно не доступен, попробуйте повторить запрос позднее"
        writeToChat(message, true)
      })
  }

  function actionConfirm(string) {
    writeToChat(string, false)
    if (
      string.toLowerCase() === confirmYes ||
      string.toLowerCase() === confirmAgree
    ) {
      const message = "Отлично! Вклад открыт"
      writeToChat(message, true)
    }
    if (string.toLowerCase() === no || string.toLowerCase() === notAgree) {
      const message = "Жаль, что условия вам не подошли. Приходите ещё"
      writeToChat(message, true)
    }
    input.value = ""
    chatOutput.scrollIntoView(false, { behavior: "smooth", block: "end" })
  }

  function changeUserContribution(contribution) {
    userContribution = contribution
    getProducts(userContribution)
    chatOutput.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  function writeToChatButton(array, isRecived) {
    array.map((item, index) => {
      let messageHTML = `<button id="_${index}" class="chat_message ${
        isRecived ? "recived" : "send"
      }">${item}</button>`
      chatOutput.innerHTML += messageHTML
    })
    array.map((item, index) => {
      document.getElementById(`_${index}`).onclick = function () {
        changeUserContribution(item)
      }
    })
    chatOutput.scrollIntoView({ behavior: "smooth", block: "end" })
  }
}

document.addEventListener("DOMContentLoaded", loadChat)
