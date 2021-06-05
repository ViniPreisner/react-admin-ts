import React from 'react'
import Container from '../Container'
import './styles.css'

const Header = () => {
    return (
        <div className="header--mainWrapper">
            <Container>
                <div className="topLinks">
                    <a href="" className="topLinks--item">Meus Pedidos</a>
                    <span>|</span>
                    <a href="" className="topLinks--item">Central de atendimento</a>
                    <span>|</span>
                    <a href="" className="topLinks--item">Fale com um consultor</a>
                </div>
            </Container>
        </div>
    )
}

export default Header