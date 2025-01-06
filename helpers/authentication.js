import 'dotenv/config';
import JWT  from 'jsonwebtoken';


export function generateToken(email){
    return JWT.sign({email},process.env.JWT_TOKEN_SECRET,{expiresIn:'1h'});

}

