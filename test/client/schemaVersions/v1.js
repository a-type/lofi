/** @generated - do not modify this file. */

// schema.ts
import { schema, collection } from "@verdant-web/store";
var items = collection({
  name: "item",
  primaryKey: "id",
  fields: {
    id: {
      type: "string",
      default: () => Math.random().toString(36).slice(2, 9)
    },
    content: {
      type: "string",
      default: ""
    },
    tags: {
      type: "array",
      items: {
        type: "string",
        options: ["a", "b", "c"]
      }
    },
    purchased: {
      type: "boolean",
      default: false
    },
    categoryId: {
      type: "string",
      nullable: true,
      indexed: true
    },
    comments: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            default: () => Math.random().toString(36).slice(2, 9)
          },
          content: {
            type: "string",
            default: ""
          },
          authorId: {
            type: "string"
          }
        }
      }
    },
    image: {
      type: "file",
      nullable: true
    }
  },
  indexes: {
    purchasedYesNo: {
      type: "string",
      compute(item) {
        return item.purchased ? "yes" : "no";
      }
    }
  }
});
var categories = collection({
  name: "category",
  pluralName: "categories",
  primaryKey: "id",
  fields: {
    id: {
      type: "string",
      default: () => Math.random().toString(36).slice(2, 9)
    },
    name: {
      type: "string",
      indexed: true
    },
    metadata: {
      type: "object",
      nullable: true,
      properties: {
        color: {
          type: "string"
        }
      }
    }
  }
});
var schema_default = schema({
  version: 1,
  collections: {
    items,
    categories
  }
});
export {
  schema_default as default
};
