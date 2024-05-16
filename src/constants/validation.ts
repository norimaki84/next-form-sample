import * as Yup from 'yup'

export const errorMessageList = {
  name: '全角文字でで入力してください',
  required: '入力必須項目です',
  katakana: '全角カタカナで入力してください',
  password: '有効なパスワード形式ではありません',
  passwordConfirm: '確認用パスワードに誤りがあります',
  email: '有効なメールアドレスではありません',
  phoneNumber: '正しい電話番号の形式で入力してください',
  zipCode: '半角数字のみ7桁で入力してください',
  numberPlates_or_chassisNumber: '自動車登録番号または車台番号どちらかを入力してください',
  fileSize: '所定の画像のサイズを選択してください',
  fileArea: '所定の画像のサイズを選択してください',
}

export const FormSchema = Yup.object({
  user: Yup.object({
    // 共通条件：入力必須
    // 名前：文字列
    name: Yup.string().required(errorMessageList.required),
    // メールアドレス：文字列＋メールアドレスの正しい形式
    mail: Yup.string().required(errorMessageList.required).email(errorMessageList.email),
    // 電話番号：０〜９のnumberのみ
    phoneNumber: Yup.string()
      .required(errorMessageList.required)
      .matches(/[0-9]$/, errorMessageList.phoneNumber) // 半角数字のみ
      .max(11, errorMessageList.phoneNumber) // 最大11
      .min(10, errorMessageList.phoneNumber), // 最小10,
    // パスワード：半角英数字
    password: Yup.string()
      .required(errorMessageList.required)
      .matches(/^(?=.*?[a-zA-Z])(?=.*?\d)[a-zA-Z\d-]{8,16}$/, errorMessageList.password),
  }),
})
export type FormSchemaType = Yup.InferType<typeof FormSchema>
