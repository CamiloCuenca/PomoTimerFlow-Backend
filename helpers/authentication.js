import 'dotenv/config';
import JWT  from 'jsonwebtoken';


export function generateToken(email){
    return JWT.sign({email},process.env.JWT_TOKEN_SECRET,{expiresIn:'1h'});

}


export default function verifyToken(req, res, next) {
    const token = req.header('Authorization')?.replace('Bearer ', '').trim();

    if (!token) {
        return res.status(401).json({ error: 'Token requerido' }); 
    }

    try {
        const dataToken = JWT.verify(token, process.env.JWT_TOKEN_SECRET);
        console.log(dataToken.email);
        req.emailConectado=dataToken.email;
        next();
    } catch (e) {
        return res.status(401).json({ error: 'Token no válido' }); // Devuelve inmediatamente
    }


  

}