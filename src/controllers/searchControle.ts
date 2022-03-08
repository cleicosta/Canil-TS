import { Request, Response } from "express";
import { Pet } from "../models/pet";
import { createrMenuObject } from "../helpers/createrMenuObject";


export const search = (req:Request, res:Response)=>{
   let query:string = req.query.q as string;

   let list = Pet.getFromName(query);

    res.render('pages/page',{
       menu:createrMenuObject(''),
       list,
       query
    });
}