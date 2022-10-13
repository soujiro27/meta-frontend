import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../components/Input'
import { Container } from '../../components/Container'
import { ErrorMessage } from '../../components/ErrorMessage'
import { StyledSubmit, StyledTitle } from './styles'

const CreateUi = ({ register, errors, onSubmit, handleSubmit }) => (
  <>
    <StyledTitle>Nuevo registro</StyledTitle>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container
        show={true}
        direction='column'
        alignItems='center'
        justifyContent='center'
        padding='10px 16px'
        width='100%'

      >
        <Input
          type='text'
          placeholder='Nombre'
          name='name'
          register={register}
        />

        <ErrorMessage
          message={errors.name?.message}
        />

        <Input
          type='text'
          placeholder='Apellido paterno'
          name='firstName'
          register={register}
        />

        <ErrorMessage
          message={errors.firstName?.message}
        />

        <Input
          type='text'
          placeholder='Apellido materno'
          name='lastName'
          register={register}
        />

        <ErrorMessage
          message={errors.lastName?.message}
        />

        <Input
          type='text'
          placeholder='Direccion'
          name='address'
          register={register}
        />

        <ErrorMessage
          message={errors.address?.message}
        />

        <Input
          type='number'
          placeholder='Edad'
          name='age'
          register={register}
        />

        <ErrorMessage
          message={errors.age?.message}
        />

        <Input
          type='tel'
          placeholder='Telefono'
          name='phone'
          register={register}
        />

      <ErrorMessage
          message={errors.phone?.message}
        />

        <Input
          type='text'
          placeholder='Email'
          name='email'
          register={register}
        />

        <ErrorMessage
          message={errors.email?.message}
        />

        <StyledSubmit
          value='Registar'
          type='submit'
        />
      </Container>
    </form>
  </>
)

CreateUi.propTypes = {
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export { CreateUi }
