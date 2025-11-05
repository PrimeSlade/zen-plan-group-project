import { Hono } from "hono";
import { getLists } from "../controllers/list/get-lists/get.list.ts";
import { createList } from "../controllers/list/create-list/create.list.ts";
import { editList } from "../controllers/list/edit-list/edit.list.ts";
import { deletList } from "../controllers/list/delete-list/delete.list.ts";
import { toggleList } from "../controllers/list/toggle-list/toggle.list.ts";
import { completeLists } from "../controllers/list/complete-all-list/complete.list.ts";
import { verify } from "../middlewares/verify.ts";

const listRouter = new Hono();

// list routes
listRouter.use(verify);
listRouter.get("/get", getLists);
listRouter.post("/create", createList);
listRouter.put("/edit/:id", editList);
listRouter.delete("/delete/:id", deletList);
listRouter.patch("/toggle/:id", toggleList);
listRouter.patch("/complete", completeLists);

export { listRouter };
