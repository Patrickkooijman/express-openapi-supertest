const get = async (req, res, next) => {
  res.status(200).json([{
    "name": "hello world"
  }]);
};

get.apiDoc = {
  summary: 'Returns worlds by name.',
  operationId: 'worlds',
  responses: {
    200: {
      description: 'A list of worlds that match the requested name.',
      schema: {
        type: 'array',
        items: {
          $ref: '#/definitions/World'
        }
      }
    },
    default: {
      description: 'An error occurred',
      schema: {
        additionalProperties: true
      }
    }
  }
};

module.exports = { get };
