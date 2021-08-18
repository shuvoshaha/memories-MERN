import jwt from 'jsonwebtoken';

const auth =  async (req, res, next) => {
    try {
       
        // console.log(req.headers.authorization)
        const token = req.headers.authorization;
        const isCustomAuth = token.length < 500;
        // 

        let decodeData;

        if (token && isCustomAuth) {

            decodeData =  jwt.verify(token, 'test123')
            req.userId =  decodeData?.id;

        } else {

            decodeData = jwt.decode(token)
            req.userId =  decodeData?.sub
        }

        next();
    }

    catch (err) {
        console.log(err)
    }
}

export default auth