import express from "express";

export const MoviesApi = express.Router();

MoviesApi.get("/", (req, res)=>{
    res.json([
        {
            title: "title"
        }
    ]);
});