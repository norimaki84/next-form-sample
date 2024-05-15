import * as Yup from 'yup'

export const errorMessageList = {
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
    // 名前：文字列
    // メールアドレス：文字列＋メールアドレスの正しい形式
    // 電話番号：０〜９のnumberのみ
    // パスワード：半角英数字
  }),
})
export type FormSchemaType = Yup.InferType<typeof FormSchema>
