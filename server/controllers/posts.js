import postMessage from "../models/postSchema.js"

export const getPosts = async (req, res) => {
    try {
        const postMessage_get = await postMessage.find();
        res.json(postMessage_get)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post)
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json(error)
    }
}

