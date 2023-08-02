const express = require('express');

const useOpenApi = require('./openapi');

const app = express();

useOpenApi(app);

app.listen(3000);