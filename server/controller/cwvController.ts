import Cwv from "../model/cwvModel";
import { Request, Response, NextFunction } from "express";
import { getAll, createOne, getOne, updateOne } from "./factoryHandler";
import AppError from "../utils/error/AppError";
import { catchAsync } from "../utils/error/catchAsync";

export const getAllUser = getAll(Cwv);
export const createOneUser = createOne(Cwv);
export const getOneUser = getOne(Cwv);
export const updateOneUser = updateOne(Cwv);
