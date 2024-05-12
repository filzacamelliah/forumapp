const Session = require("../models/sessionModel");

 async function middleware (req, res, next) {
    const sessionId = req.cookies?.session_Id;
        if(!sessionId) {
            return res.send("Kamu tidak memiliki session, sehingga tidak memiliki akses")
        }
        const session = await Session.findOne({_id: sessionId});

        if(!session) {
        return res.send("Kamu tidak memiliki session, sehingga tidak memiliki akses!")
        }

        
        next()
}

module.exports = middleware