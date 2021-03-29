const db = require('../models')

module.exports = {
    blogGetAll: function (req, res) {
        db.blogs.find({}, function (err, result) {
            if (err) {
                console.log('Blog get all: ', err);
                res.status(500).json({
                    status: 500,
                    code: "blogGetAll",
                    message: "Error found went get all blog",
                    detail: err
                })
            } else {
                console.log('Found all blog')
                res.status(200).json({
                    status: 200,
                    code: "blogGetAll",
                    message: "Successfully get all blog",
                    detail: result
                })
            }
        })
    },
    blogGetOne: function (req, res) {
        //** line for validation */

        db.blogs.findOne({ _id: req.params.id }, function (err, result) {
            if (err) {
                console.log('Blog get one: ', err);
                res.status(500).json({
                    status: 500,
                    code: "blogGetOne",
                    message: "Error found went get a blog",
                    detail: err
                })
            } else {
                console.log('Blog Get One: ', result);
                if (!result) {
                    res.status(404).json({
                        status: 404,
                        code: "blogGetOne",
                        message: "Fail get a blog",
                        detail: result
                    })
                    return
                }
                res.status(200).json({
                    status: 200,
                    code: "blogGetOne",
                    message: "Successfully get a blog",
                    detail: result
                })
            }
        })
    },
    blogCreate: function (req, res) {
        //** line for validation */

        const blogDetail = {
            blogName: req.body.blogName,
            blogDescription: req.body.blogDescription
        }

        db.blogs.create(blogDetail, function (err, result) {
            if (err) {
                console.log('New blog error: ', err);
                res.status(500).json({
                    status: 500,
                    code: "blogCreate",
                    message: "Error found went create blog",
                    detail: err
                })
            } else {
                console.log('New blog: ', JSON.stringify(result))
                res.status(200).json({
                    status: 200,
                    code: "blogCreate",
                    message: "Successfully create a new blog",
                    detail: result
                })
            }
        })
    },
    blogUpdate: function (req, res) {
        //** line for validation */

        db.blogs.findByIdAndUpdate(
            { _id: req.body.id },
            req.body,
            { new: true, runValidators: true },
            function (err, result) {
                if (err) {
                    console.log('Blog Update: ', err);
                    res.status(500).json({
                        status: 500,
                        code: "blogUpdate",
                        message: "Error found went update a blog",
                        detail: err
                    })
                } else {
                    console.log('Blog Update: ', result);
                    if (!result) {
                        res.status(404).json({
                            status: 404,
                            code: "blogUpdate",
                            message: "Fail get a blog",
                            detail: result
                        })
                        return
                    }
                    res.status(200).json({
                        status: 200,
                        code: "blogUpdate",
                        message: "Successfully update a blog",
                        detail: result
                    })
                }
            })
    },
    blogDelete: function (req, res) {
        //** line for validation */

        db.blogs.findByIdAndDelete(
            { _id: req.params.id },
            function (err, result) {
                if (err) {
                    console.log('Blog Delete: ', err);
                    res.status(500).json({
                        status: 500,
                        code: "blogDelete",
                        message: "Error found went delete a blog",
                        detail: err
                    })
                } else {
                    console.log('Blog Delete: ', result);
                    if (!result) {
                        res.status(404).json({
                            status: 404,
                            code: "blogDelete",
                            message: "Fail get a blog",
                            detail: result
                        })
                        return
                    }
                    res.status(200).json({
                        status: 200,
                        code: "blogDelete",
                        message: "Successfully delete a blog",
                        detail: result
                    })
                }
            })
    },
}