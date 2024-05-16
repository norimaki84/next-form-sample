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
    console.log('---- onSubmit: 送信', data)
  }

  return (
    <div className={styles['container']}>
      <Meta id="top" />
      <h1>フォームテスト</h1>
      <div className={styles['formWrap']}>
        <form action="#" className={styles['form']} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>名前</label>
            <input type={'text'} {...register('user.name')} />
            <span className={styles['error-text']}>{formState.errors.user?.name?.message}</span>
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>メールアドレス</label>
            <input type={'text'} {...register('user.mail')} />
            <span>{formState.errors.user?.mail?.message}</span>
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>電話番号</label>
            <input type={'text'} {...register('user.phoneNumber')} />
            <span>{formState.errors.user?.phoneNumber?.message}</span>
          </div>
          <div className={styles['form--item']}>
            <label className={styles['form--label']}>パスワード</label>
            <input type={'text'} {...register('user.password')} />
            <span>{formState.errors.user?.password?.message}</span>
          </div>
          <button>送信</button>
        </form>
      </div>
    </div>
  )
}
