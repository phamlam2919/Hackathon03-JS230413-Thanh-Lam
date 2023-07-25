exports.validateBody = (req, res, next) => {
    let { input } = req.body;

    console.log(req.body);

    if (!input) {
        res.json({
            message: "Input is invalid",
        });
    } else {
        console.log("thanh cong");
        next();
    }
};
