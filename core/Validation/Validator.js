// export class Validator {
//   constructor([rule, mask] = []) {
//
//     this.rules = {
//       date: /^([0-2][0-9]\.02|([0-2][0-9]|3[0-1])\.(0[0-13-9]|1[0-2]))\.(19[0-9]{2}|2[0-1][0-9]{2})$/,
//       mobile: /^\+7 (\d{3}) \d{3}-\d{2}-\d{2}$/,
//       email: /((?<!\.)[-+!#$%&'*/=?^`{|}~\w]+(?!\.)|".+")@((?<!-)[a-z0-9-]+(?!-)|(?<!-)[a-z0-9-]+(?!-)\.[a-z]+)/i,
//       custom: rule,
//     }
//     this.masks = {
//       date: 'XX.XX.XXXX',
//       mobile: '+7 XXX XXX-XX-XX',
//       custom: mask,
//     }
//   }
// }


import DateValidator from "./DateValidator.js";
import EmailValidator from "./EmailValidator.js";
import PhoneValidator from "./PhoneValidator.js";


class Validator {
  validators;
  date = new DateValidator();
  email = new EmailValidator();
  phone = new PhoneValidator();


  /**
   * Добавляет обработчик событий
   * @param validators{{
   *    type:string,
   *    attrs: {
   *      validator: function,
   *      message: string
   *      }
   *    }} - объект с типом валидатора и доп. параметрами
   */
  constructor(validators) {
    this.validators = validators;
  }

  /**
   *
   * @param data {any} - данные для валидации
   * @returns {null|string} - возвращает null, если данные валиды или сообщение об ошибке
   */
  validate(data) {
    try {
      this.validators.forEach(({ type, attrs }) => {
        this[type].validate(data, attrs);
      });

      return null;

    } catch (e) {
      return e.message;
    }
  }
}

export default Validator;
