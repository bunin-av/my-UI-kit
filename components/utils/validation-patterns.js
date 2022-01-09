export class Validations {
  constructor([rule, mask] = []) {

    this.rules = {
      date: /^([0-2][0-9]\.02|([0-2][0-9]|3[0-1])\.(0[0-13-9]|1[0-2]))\.(19[0-9]{2}|2[0-1][0-9]{2})$/,
      mobile: /^\+7 (\d{3}) \d{3}-\d{2}-\d{2}$/,
      email: /((?<!\.)[-+!#$%&'*/=?^`{|}~\w]+(?!\.)|".+")@((?<!-)[a-z0-9-]+(?!-)|(?<!-)[a-z0-9-]+(?!-)\.[a-z]+)/i,
      custom: rule,
    }
    this.masks = {
      date: 'XX.XX.XXXX',
      mobile: '+7 XXX XXX-XX-XX',
      custom: mask,
    }
  }
}
