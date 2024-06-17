export interface IFormData {
  id: number
  name: string
  surname:	string
  birthday:	string
  hairColor:	string
  eyeColor:	string
  height:	number
  weight:	number
  photo:	string
  badHabits: string[]
}

NewDelList{
  deliveryDate	string($date-time)
  questionnaireIds	[
    uniqueItems: true
  integer($int64)]
}