import { NavLink } from 'react-router-dom';
import './headerproject.scss';

export default function HeaderProject({ nextProject }){
    return(
        <header className='header-project'>
            <div className='header-project__wrapper'>
                <NavLink to={'/'} className={'header-project__link'}>Close</NavLink>
                <NavLink to={`/${nextProject.id}`} className={'header-project__link'}>Next Project</NavLink>
            </div>
        </header>
    )
}