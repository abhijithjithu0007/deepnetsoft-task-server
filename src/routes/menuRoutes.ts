import { Router } from "express";
import { validateData } from "../middleware/zodValidation";
import {
  addItemToMenu,
  createMenu,
  getAllMenus,
} from "../controllers/menuController";
import { addItemToMenuSchema, createMenuSchema } from "../utils/validations";
import { errorCatch } from "../utils/errors/errorCatch";

const router = Router();

router.post(
  "/create-menu",
  validateData(createMenuSchema),
  errorCatch(createMenu)
);

router.get("/get-all-menus", errorCatch(getAllMenus));
router.post(
  "/:menuId/items",
  validateData(addItemToMenuSchema),
  errorCatch(addItemToMenu)
);

export default router;
