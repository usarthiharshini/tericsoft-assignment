const logout = (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
};

export default logout;
