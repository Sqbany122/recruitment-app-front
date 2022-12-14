import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <a className="navbar-brand" href="#">Recruitment APP</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="users-list">Users list</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="add-users">Add users</Link>
                </li>
                </ul>
            </div>     
        </nav>
    )
}

export default Navigation;