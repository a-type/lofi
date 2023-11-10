import { StorageSchema } from "@verdant-web/common";
declare const schema: StorageSchema;
export default schema;

export type ItemSnapshot = {
  id: string;
  content: string;
  tags: ItemTagsSnapshot;
  purchased: boolean;
  categoryId: string | null;
  comments: ItemCommentsSnapshot;
  image: string | null;
};

export type ItemTagsSnapshot = string[];
export type ItemCommentsItemSnapshot = {
  id: string;
  content: string;
  authorId: string;
};
export type ItemCommentsSnapshot = ItemCommentsItemSnapshot[];
export type ItemInit = {
  id?: string;
  content?: string;
  tags?: ItemTagsInit;
  purchased?: boolean;
  categoryId?: string | null;
  comments?: ItemCommentsInit;
  image?: string | null;
};

export type ItemTagsInit = string[];
export type ItemCommentsItemInit = {
  id?: string;
  content?: string;
  authorId: string;
};
export type ItemCommentsInit = ItemCommentsItemInit[];

export type CategorySnapshot = { id: string; name: string };
export type CategoryInit = { id?: string; name: string };

export type MigrationTypes = {
  item: { init: ItemInit; snapshot: ItemSnapshot };
  category: { init: CategoryInit; snapshot: CategorySnapshot };
};