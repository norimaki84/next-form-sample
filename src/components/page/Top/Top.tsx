import type { NextPage } from 'next'
import React, { useEffect, useState, ChangeEvent } from 'react'
import Link from 'next/link'

import { Meta } from '~/components/Meta'

import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import styles from './Top.module.scss'
import { FormSchema, FormSchemaType } from '~/constants/validation'

export const Top: NextPage = () => {
  // React-Hook-Form設定
  const { register, handleSubmit, formState, trigger, setValue, getValues, setFocus } =
    useForm<FormSchemaType>({
      shouldFocusError: false,
      reValidateMode: 'onSubmit',
      resolver: yupResolver(FormSchema),
    })

  // フォーム送信関数
  const onSubmit: SubmitHandler<any> = async (data: any) => {
    // console.log('---- onSubmit: 送信')
  }

  return (
    <div className={styles['container']}>
      <Meta id="top" />
      <h1>フォームテスト</h1>
      <div className={styles['formWrap']}>
        <form action="#" className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>名前</label>
            <input type={'text'} />
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>メールアドレス</label>
            <input type={'text'} />
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>電話番号</label>
            <input type={'text'} />
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>フリーテキスト</label>
            <textarea />
          </div>
        </form>
      </div>
    </div>
  )
}
