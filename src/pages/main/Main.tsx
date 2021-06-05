import React from 'react'
import Chart from '../../Components/charts/Charts'
import hello from '../../assets/hello.png'
import './Main.css'

type Props = {

}

const Main = (props: Props) => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Olá usuário</h1>
                        <p>Bem vindo ao painel</p>
                    </div>
                </div>

                <div className="main__cards">

                    <div className="card">
                        <i className="fa fa-file-text fa-2x text-lightblue"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de pedidos</p>
                            <span className="font-bold text-title">12456</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-money fa-2x text-red"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Pagamentos</p>
                            <span className="font-bold text-title">R$ 1.245,00</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-archive fa-2x text-yellow"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Número de produtos</p>
                            <span className="font-bold text-title">670</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className="fa fa-bars fa-2x text-green"></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Categorias</p>
                            <span className="font-bold text-title">40</span>
                        </div>
                    </div>

                </div>

                <div className="charts">

                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Ubatuba, São paulo, BR</p>
                            </div>
                            <i className="fa fa-usd"></i>
                        </div>
                        <Chart />
                    </div>

                    <div className="charts__right">
                        <div className="charts__right__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Ubatuba, São paulo, BR</p>
                            </div>
                            <i className="fa fa-area-chart"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card card1">
                                <h1>Lucro</h1>
                                <p>R$ 2.500</p>
                            </div>
                            <div className="card card2">
                                <h1>Pagamentos</h1>
                                <p>R$ 250</p>
                            </div>
                            <div className="card card3">
                                <h1>Custos</h1>
                                <p>R$ 150</p>
                            </div>
                            <div className="card card4">
                                <h1>Banco</h1>
                                <p>R$ 180</p>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </main>
    )
}

export default Main