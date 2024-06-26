const jwt = require('jsonwebtoken');

const generarJWT = ( uid: any, name: any ) => {
    
    return new Promise( (resolve, reject) => {
        
        const payload = {uid, name};

        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn: '2h'
        }, (error: any, token: any) => {
            if( error ){
                console.log( error );
                reject( 'No se pudo generar el token' );
            }

            resolve( token );
        })        
    })
}

module.exports = {
    generarJWT,
}