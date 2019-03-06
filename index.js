const surveyForm = document.getElementById('survey-form')

surveyForm.addEventListener('submit', event => {
  console.log(`surveyForm submitted, event:`)
  console.log(event)
})
