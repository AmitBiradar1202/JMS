export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  //const cookieName=user.role==="Admin"?"adminToken":"seekerToken";
  const cookieName="token";
  res.status(statusCode)
      .cookie(token,cookieName,{
        expiresIn:new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
        httpOnly:true
      })
      .json({
        token,
        user,
        message,success:true
      })
};
