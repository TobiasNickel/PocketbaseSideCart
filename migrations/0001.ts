import PocketBase from "pocketbase";

export const up = async (db: PocketBase) => {
  await db.collection("SC_user").create({
    username: "sidecart",
    email: "test@example.com",
    emailVisibility: false,
    password: "sidecart",
    passwordConfirm: "sidecart",
  });
  await db.collections.create({
    name: "SC_subscription",
    type: "base",
    system: false,
    schema: [
      {
        name: "user",
        type: "text",
        system: false,
        required: false,
        unique: false,
        options: { min: null, max: null, pattern: "" },
      },
      {
        name: "type",
        type: "text",
        system: false,
        required: false,
        unique: false,
        options: { min: null, max: null, pattern: "" },
      },
      {
        system: false,
        name: "config",
        type: "json",
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSize: 2000000,
        },
      },
    ],
    indexes: [],
    listRule: "@request.auth.id = @collection.SC_user.id",
    viewRule: "@request.auth.id = @collection.SC_user.id",
    createRule: "",
    updateRule: "@request.auth.id = @collection.SC_user.id",
    deleteRule: "@request.auth.id = @collection.SC_user.id",
    options: {},
  });
  const functionCollection = await db.collections.create({
    name: "SC_function",
    type: "base",
    system: false,
    schema: [
      {
        name: "name",
        type: "text",
        system: false,
        required: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
      {
        name: "code",
        type: "text",
        system: false,
        required: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
    ],
    indexes: ["CREATE UNIQUE INDEX `idx_A1yFVVJ` ON `SC_function` (`name`)"],
    options: {},
  });
  await db.collections.create({
    name: "SC_cron",
    type: "base",
    system: false,
    schema: [
      {
        name: "schedule",
        type: "text",
        system: false,
        required: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
      {
        name: "function",
        type: "relation",
        system: false,
        required: false,
        unique: false,
        options: {
          collectionId: functionCollection.id,
          cascadeDelete: false,
          minSelect: null,
          maxSelect: 1,
          displayFields: null,
        },
      },
      {
        system: false,
        name: "error",
        type: "text",
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
      {
        system: false,
        name: "arg",
        type: "json",
        required: false,
        presentable: false,
        unique: false,
        options: {
          maxSize: 2000000,
        },
      },
    ],
    indexes: [],
    options: {},
  });
  await db.collections.create({
    name: "SC_public_files",
    type: "base",
    system: false,
    schema: [
      {
        system: false,
        name: "path",
        type: "text",
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
      {
        system: false,
        name: "textContent",
        type: "editor",
        required: false,
        presentable: false,
        unique: false,
        options: {
          convertUrls: false,
        },
      },
      {
        system: false,
        name: "file",
        type: "file",
        required: false,
        presentable: false,
        unique: false,
        options: {
          mimeTypes: [],
          thumbs: [],
          maxSelect: 1,
          maxSize: 5242880,
          protected: false,
        },
      },
      {
        system: false,
        name: "delete",
        type: "bool",
        required: false,
        presentable: false,
        unique: false,
        options: {},
      },
    ],
    indexes: ["CREATE UNIQUE INDEX `idx_path` ON `SC_public_files` (`path`)"],
    listRule: "@request.auth.id=@collection.SC_user.id",
    viewRule: "@request.auth.id=@collection.SC_user.id",
    createRule: null,
    updateRule: null,
    deleteRule: "@request.auth.id=@collection.SC_user.id",
    options: {},
  });

  await db.collections.create({
    name: "SC_hooks",
    type: "base",
    system: false,
    schema: [
      {
        system: false,
        name: "name",
        type: "text",
        required: false,
        presentable: false,
        unique: false,
        options: {
          min: null,
          max: null,
          pattern: "",
        },
      },
      {
        system: false,
        name: "textContent",
        type: "editor",
        required: false,
        presentable: false,
        unique: false,
        options: {
          convertUrls: false,
        },
      },
      {
        system: false,
        name: "delete",
        type: "bool",
        required: false,
        presentable: false,
        unique: false,
        options: {},
      },
    ],
    indexes: ["CREATE UNIQUE INDEX `idx_path` ON `SC_public_files` (`path`)"],
    listRule: "@request.auth.id=@collection.SC_user.id",
    viewRule: "@request.auth.id=@collection.SC_user.id",
    createRule: null,
    updateRule: null,
    deleteRule: "@request.auth.id=@collection.SC_user.id",
    options: {},
  });
};
