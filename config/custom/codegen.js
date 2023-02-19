﻿module.exports.codegen = {
    baseFields: ['id', 'created_at', 'updated_at', 'created_by', 'updated_by', 'is_archived', 'update_count', 'tenant', 'additional_attributes', 'is_active'],
    stringTypesInPostgreSql: ['character', 'char', 'character varying'],
    stringTypesInSails: 'STRING',
    numericTypesInPostgreSql: ['int', 'bigint', 'numeric', 'double precision'],
    numericTypesInSails: 'number',
    jsonTypesInPostgreSql: ['json', 'jsonb'],
    jsonTypesInSails: 'json',
    dateTypesInPostgreSql: ['date', 'timestamp', 'timestamp without time zone', 'timestamp with time zone'],
    dateTypesInSails: 'ref',
    uuidTypesInPostgreSql: ['uuid'],
    uuidTypesInSails: 'STRING',
    modelCodeTemplate: 'code/sails/model/model',
    controllerCodeTemplate: 'code/sails/controller/controller',
    modelCodeSaveToPath: 'api/models/{}.js',
    modelControllerSaveToPath: 'api/controllers/{}Controller.js',
    queryColumndefTemplate: 'queries/columndef',
    queryTabledefTemplate: 'queries/tabledef',
    queryViewdefTemplate: 'queries/viewdef',
    menuitems: 'queries/menuitems',
    //crudCodeTemplates: ['code/crud.vue/EntityDataTable', 'code/crud.vue/EntityDataTable', 'code/crud.vue/EntityDataTableActionButtons', 'code/crud.vue/EntityPageHeader', 'code/crud.vue/EntitySearch', 'code/crud.vue/EntityUpsert', 'code/crud.vue/index']
    nuxt_frontend_code_templates: ['code/nuxt3/pages/EntityGrid', 'code/nuxt3/pages/EntityPageHeader', 'code/nuxt3/pages/EntitySearch', 'code/nuxt3/pages/index', 'code/nuxt3/pages/EntityUpsert'],
    nuxt_server_code_templates: ['code/nuxt3/server/[id].ts', 'code/nuxt3/server/[id].put.ts', 'code/nuxt3/server/[id].delete.js', 'code/nuxt3/server/create.post.ts', 'code/nuxt3/server/index.get.js']
};