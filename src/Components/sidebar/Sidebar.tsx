import './Sidebar.css'
import logo from '../../assets/pngwing.com.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

type Props = {
    sidebarOpen: Boolean,
    closeSidebar: Function
}

const Sidebar = (props: Props) => {

    const { Logout } = useAuth()

    const handleLogout = () => {
        Logout()
    }

    return (

        <div className={props.sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">

            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Admin</h1>
                </div>

                <i 
                    onClick={() => props.closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <Link to="/">Home</Link>
                </div>
                <h2>Áreas</h2>
                <div className="sidebar__link">
                    <i className="fa fa-tachometer"></i>
                    <a href="#">Área administrativa</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <Link to="/products">Produtos</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>
                <h2>Área</h2>
                <div className="sidebar__link">
                    <i className="fa fa-male"></i>
                    <a href="#">Administradores</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-user-circle"></i>
                    <Link to="/users">Usuários</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-money"></i>
                    <a href="#">Pagamentos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tasks"></i>
                    <a href="#">Plataforma</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text"></i>
                    <a href="#">Política de privacidade</a>
                </div>
                <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>

        </div>

    )

}

export default Sidebar