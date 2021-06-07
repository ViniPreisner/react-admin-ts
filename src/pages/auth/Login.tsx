import React, { useContext } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Controller, useForm } from 'react-hook-form'
import { useAuth } from '../../context/AuthContext'
import './Auth.css'

type Props = {}

type FormLogin = {
    email: string,
    password: string
}

const Login = (props: Props) => {

    const { signed, loading, signIn } = useAuth()

    const { control, handleSubmit, formState: { errors } } = useForm<FormLogin>();

    const onSubmit = (data: FormLogin) => {
        console.log('login', data)
        console.log('chamando a funcao do provider')
        signIn()
    }

    return (
        <div className="content">
            <Card className="login__card" >
                <Card.Title>
                    <h1>Login</h1>
                </Card.Title>
                <Card.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>E-mail</Form.Label>
                            <Controller
                                name="email"
                                control={control}
                                defaultValue={''}
                                rules={{ required: true }}
                                render={({field}) => 
                                <Form.Control
                                    type="email"
                                    id="email"
                                    placeholder="Enter email"
                                    readOnly={loading}
                                    {...field}
                                />}
                            />
                            {errors.email && <p>Digite seu e-mail</p>}
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Senha</Form.Label>
                            <Controller
                                name="password"
                                control={control}
                                defaultValue={''}
                                rules={{ required: true }}
                                render={({field}) =>
                                <Form.Control
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    readOnly={loading}
                                    {...field}
                                />}
                            />
                            {errors.password && <p>Digite sua senha</p>}
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Lembrar" />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            disabled={loading}
                        >
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Login