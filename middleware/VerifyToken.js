import jwt from 'jsonwebtoken';

export const VerifyToken = (req, res, next) => {
    const accessToken = req.cookies.accessToken ||
                        req.headers['x-access-token'] || 
                        req.headers['authorization'];
                        console.log(`this is the accessToken ${accessToken}`);
    if (accessToken == null) return res.sendStatus(401);
    console.log('access token: ' + accessToken);
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decode)=>{
        if(err) return res.sendStatus(403);
        let email = decode.email;
        let userId = decode.userId;
        next();
    })
}