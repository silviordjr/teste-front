import React from 'react'
import logoHome from '../img/logoHome.png'
import { MainHome, MainImg, MainTexto } from '../styles/HomeStyle'

function HomePage () {
    return(
        <MainHome>
            <MainImg>
                <img src={logoHome} alt='Logo money money' />
            </MainImg>
            <MainTexto>
                <h2>Bem-vindo à página de cadastro de solicitações de empréstimos</h2>
                <p>Você pode criar uma nova solicitação ou visualizar as solicitações pendentes clicando nos botões abaixo:</p>
                <div>
                    <button>Criar nova solicitação</button>
                    <button>Visualizar solicitações</button>
                </div>
            </MainTexto>
        </MainHome>
    )
}

export default HomePage