import React from 'react';
import '@styles/NotFound.scss'

const NotFound = () => {
    return (
        <div className='notFound'>
                <div className="notFound-404">
                    <span id='span404'>404</span>
                </div>
                <div className='notFound-Msg'>
                    <span id='spanMsg'>Pagina no encontrada... <b>:(</b></span>
                </div>
            </div>
    );
};

export default NotFound;