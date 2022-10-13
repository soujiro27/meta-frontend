import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { joiResolver } from '@hookform/resolvers/joi'
import { createMiddleware } from '../../middlewares/create.middleware'
import { newClient } from '../../actions/clients.action'
import { CreateUi } from './Ui'
import { Loader } from '../../components/Loader/Loader'

const Create = () => {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: joiResolver(createMiddleware)
  })

  const success = useSelector(store => store.client.success)

  const onSubmit = data => {
    dispatch(newClient(data))
  }

  return (
    <>
      <CreateUi
        register={register}
        errors={errors}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
      />
      <Loader
        isOpen={success}
      />
    </>
  )
}

export { Create }
