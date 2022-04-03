import { 
    max as maxRules, 
    min as minRules,
    email as emailRules 
} from 'vee-validate/dist/rules'

export const max = {
    ...maxRules,
    message: 'Превышено максимальное число символов'
}

export const min = {
    ...minRules,
    message: (_value, argument) =>
      `Строка должна не меньше ${argument['length']} символов`,
    params: ['length'],
  }

export const email = {
    ...emailRules,
    validate(value) {
      const emailValid = emailRules.validate(value)
      const latinValid = !value.match(/[А-ЯЁа-яё]/)
  
      return emailValid && latinValid
    },
    message: 'Не коpректный email адрес',
}

export const required = {
    message: 'Поле не заполнено',
    validate(value) {
        return {
            required: true,
            valid: !['', null, undefined].includes(value),
        }
    },

    computesRequired: true,
}