export default {
  Query: {
    comments: (root, _args, { models }) => models.Comment.findAll()
  },
  Mutation: {
    createComment: (_parent, { body }, { models }, _info) => {
      return models.Comment.create({ body });
    },
    deleteComment: async (_parent, { id }, { models }, _info) => {
      const comment = await models.Comment.findByPk(id);
      comment.destroy();
      return comment;
    }
  }
};
