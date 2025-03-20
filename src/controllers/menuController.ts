import { Response, Request } from "express";
import { prisma } from "../db/db";
import { StandardResponse } from "../utils/standardResponse";

export const createMenu = async (req: Request, res: Response) => {
  const { name, description } = req.body;
  const menu = await prisma.menu.create({
    data: { name, description },
  });
  res.status(201).json(new StandardResponse("Menu created successfully", menu));
};

export const getAllMenus = async (req: Request, res: Response) => {
  const menus = await prisma.menu.findMany({ include: { items: true } });
  res
    .status(200)
    .json(new StandardResponse("Menus fetched successfully", menus));
};

export const addItemToMenu = async (req: Request, res: Response) => {
  const { menuId } = req.params;
  const { name, description, price } = req.body;
  const menuItem = await prisma.menuItem.create({
    data: { menuId, name, description, price },
  });
  res
    .status(201)
    .json(new StandardResponse("Item added to menu successfully", menuItem));
};
